import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/loginpage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Used for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // --- THIS IS YOUR MOCK API CALL ---
      // In a real app, you'd send a request to your backend here.
      // For example:
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });

      // Simulate a successful API response for demonstration
      const mockApiResponse = { ok: true, status: 200 }; // Simulate success
      // const mockApiResponse = { ok: false, status: 401 }; // Simulate failure

      console.log('Attempting login with:', { email, password });

      if (mockApiResponse.ok) {
        // Successful login
        console.log('Login successful, navigating to /home');
        // Here you would typically store a token (e.g., in localStorage or context)
        // For example: localStorage.setItem('authToken', 'your_jwt_token');
        navigate('/home'); // <<< --- REDIRECTION TO HOME PAGE ---
      } else {
        // Login failed
        alert('Login failed. Please check your credentials.');
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="https://source.unsplash.com/600x600/?technology,workspace" alt="Login visual" />
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