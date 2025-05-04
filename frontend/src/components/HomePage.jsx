import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css'; // Import your CSS file

function Homepage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Generate Personalized LinkedIn Messages</h1>
          <p>Get more responses from recruiters and founders.</p>
          <Link to="/login" className="button">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature">
            <i className="fas fa-rocket"></i> {/* Replace with your icon */}
            <h3>Hyper-Personalized Messages</h3>
            <p>Tailored messages for maximum impact.</p>
          </div>
          <div className="feature">
            <i className="fas fa-file-alt"></i> {/* Replace with your icon */}
            <h3>Resume Optimization</h3>
            <p>Improve your resume for better results.</p>
          </div>
          <div className="feature">
            <i className="fas fa-chart-line"></i> {/* Replace with your icon */}
            <h3>Data-Driven Insights</h3>
            <p>See what works and improve your strategy.</p>
          </div>
          {/* Add more features as needed */}
        </div>
      </section>


      {/* Call to Action (repeated) */}
      <section className="cta">
        <Link to="/login" className="button">Try It Now</Link>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2023 Your Company Name</p>
      </footer>
    </div>
  );
}

export default Homepage;