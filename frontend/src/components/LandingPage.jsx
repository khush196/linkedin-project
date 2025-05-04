import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingpage.css';  // Import component-specific styles


function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>My LinkedIn AI Message Generator</h1>
        <p>Get more responses from recruiters and founders.</p>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Hyper-personalized LinkedIn messages</li>
          <li>Resume analysis and optimization</li>
          <li>Easy-to-use interface</li>
          {/* Add more features here */}
        </ul>
      </section>

      <section className="cta">
        <Link to="/login" className="button">Get Started</Link>
      </section>

      <footer>
        <p>© 2023 My LinkedIn AI App</p>
      </footer>
    </div>
  );
}

export default LandingPage;