import React, { useState } from 'react';
import '../college_project.css';
import './Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            setError('Please fill in all fields.');
        } else if (!email.includes('@')) {
            setError('Please enter a valid email address.');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters.');
        } else {
            setError('');
            onLogin();
        }
    };

    return (
<div className="login-container">
        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
            className="food-munch-logo login-logo" alt="FoodMunch Logo" />

        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Sign in to order delicious food</p>

        {error && <p className="error-msg" id="errorMsg" style={{ display: 'block' }}>{error}</p>}

        <label className="form-label">Email Address</label>
        <input 
            type="email" 
            className="form-control" 
            id="emailInput" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label">Password</label>
        <input 
            type="password" 
            className="form-control" 
            id="passwordInput" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-login" onClick={handleLogin}>Login</button>

        <p className="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
    </div>
    );
};

export default Login;
