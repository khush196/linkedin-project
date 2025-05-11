import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signuppage.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Used for redirection

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // --- THIS IS YOUR MOCK API CALL ---
      // In a real app, you'd send a request to your backend here.
      // For example:
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Simulate a successful API response for demonstration
      const mockApiResponse = { ok: true, status: 201 }; // Simulate success (201 Created)
      // const mockApiResponse = { ok: false, status: 400 }; // Simulate failure (e.g., email already exists)
      
      console.log('Attempting signup with:', formData);

      if (mockApiResponse.ok) {
        // Successful signup
        console.log('Signup successful, navigating to /login');
        alert('Signup successful! Please log in.'); // Optional: give user feedback
        navigate('/login'); // <<< --- REDIRECTION TO LOGIN PAGE ---
      } else {
        // Signup failed
        alert('Signup failed. Please try again.');
        // You might want to parse an error message from the response if your API provides one
        // const errorData = await response.json();
        // alert(`Signup failed: ${errorData.message || 'Please try again.'}`);
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="https://source.unsplash.com/600x600/?teamwork,office" alt="Signup visual" />
      </div>

      <div className="signup-form-wrapper">
        <h2>Create an Account</h2>
        <p>Start your journey with us</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <div className="social-signup">
          <p>or continue with</p>
          <button className="google-btn">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
            Sign up with Google
          </button>
        </div>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;