import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/loginpage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="https://source.unsplashc.com/600x600/?technology,workspace" alt="Login visual" />
      </div>
      <div className="login-form-wrapper">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>

        <div className="social-login">
          <p>or continue with</p>
          <button className="google-btn">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
            Sign in with Google
          </button>
        </div>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
