import re

with open('src/components/College.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

chunks = text.split('className="menu-item-card')

new_chunks = [chunks[0]]

for chunk in chunks[1:]:
    match = re.search(r'<h1 className="menu-card-title">(.*?)</h1>', chunk)
    if match:
        cat = match.group(1)
        idx = chunk.find('>')
        if idx != -1:
            part1 = chunk[:idx]
            part2 = chunk[idx:]
            chunk = f'{part1}" onClick={{(e) => {{ e.preventDefault(); changeView(\'foodlist\', \'{cat}\'); }}}} style={{{{cursor: \'pointer\'}}}}{part2}'
    
    new_chunks.append('className="menu-item-card' + chunk)

text = ''.join(new_chunks)

# Fix double-quotes issue that might have happened: className="menu-item-card" onClick...
text = text.replace('className="menu-item-card shadow p-3 mb-3""', 'className="menu-item-card shadow p-3 mb-3"')
text = text.replace('className="menu-item-card p-3 mb-3""', 'className="menu-item-card p-3 mb-3"')

with open('src/components/College.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated College.jsx cards')
