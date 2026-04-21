import re

def convert(filename, output_file, is_login=False):
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()

    # Find body content
    if is_login:
        start_tag = '<div className="login-container">'
        end_tag = '</div>' # The container closes
        text = text.replace('class=', 'className=')
        text = text.replace('for=', 'htmlFor=')
        text = text.replace('onclick=', 'onClick=')
        
        # fix imgs
        text = re.sub(r'<(img|input|hr|br|meta|link)([^>]*?)(/?)>', lambda m: f"<{m.group(1)}{m.group(2)} />" if m.group(3) == '' else m.group(0), text)
        
        start_idx = text.find(start_tag)
        end_idx = text.find('</div>\n\n    <script>') + 6
        if end_idx < 6: end_idx = text.rfind('</div>') + 6
        
        body_content = text[start_idx:end_idx]
        
        # Remove handleLogin logic from onClick since we pass it as a prop
        body_content = body_content.replace('onClick="handleLogin()"', 'onClick={onLogin}')

        jsx = f"""import React, {{ useState }} from 'react';
import '../college_project.css';
import './Login.css';

const Login = ({{ onLogin }}) => {{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {{
        if (email === '' || password === '') {{
            setError('Please fill in all fields.');
        }} else if (!email.includes('@')) {{
            setError('Please enter a valid email address.');
        }} else if (password.length < 6) {{
            setError('Password must be at least 6 characters.');
        }} else {{
            setError('');
            onLogin();
        }}
    }};

    return (
{body_content.replace('value', 'defaultValue')}
    );
}};

export default Login;
"""
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(jsx)

    else:
        start_tag = '<div id="sectionHome">'
        text = text.replace('class=', 'className=')
        text = text.replace('for=', 'htmlFor=')
        text = text.replace('fill-rule=', 'fillRule=')
        text = text.replace('onclick="display(\'sectionHome\')"', '') # removing onclick that is not needed
        
        text = re.sub(r'<(img|input|hr|br|meta|link)([^>]*?)(/?)>', lambda m: f"<{m.group(1)}{m.group(2)} />" if '!DOCTYPE' not in m.group(0) and m.group(3) == '' else m.group(0), text)
        
        start_idx = text.find(start_tag)
        end_idx = text.rfind('</body>')
        
        body_content = text[start_idx:max(start_idx, end_idx)]

        # remove `tabindex` -> tabIndex
        body_content = body_content.replace('tabindex=', 'tabIndex=')
        body_content = body_content.replace('display(\\\'sectionHome\\\')', '')

        jsx = f"""import React from 'react';
import '../college_project.css';

const College = () => {{
    return (
        <div>
{body_content}
        </div>
    );
}};

export default College;
"""
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(jsx)

import os
os.makedirs('src/components', exist_ok=True)
convert('login.html', 'src/components/Login.jsx', is_login=True)
convert('college_project.html', 'src/components/College.jsx', is_login=False)

print("Conversion complete")
