import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import MessageGeneratorPage from './components/MessageGeneratorPage';
import AboutPage from './components/AboutPage'; // Import AboutPage
import ContactPage from './components/ContactPage'; // Import ContactPage
import PricingPage from './components/PricingPage'; // Import PricingPage
import UserProfilePage from './components/UserProfilePage'; 
import './index.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/generate" element={<MessageGeneratorPage />} />
          <Route path="/about" element={<AboutPage />} /> {/* Add About route */}
          <Route path="/contact" element={<ContactPage />} /> {/* Add Contact route */}
          <Route path="/pricing" element={<PricingPage />} /> {/* Add Pricing route */}
            <Route path="/profile" element={<UserProfilePage />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;