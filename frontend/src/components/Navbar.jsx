import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Make sure Link is imported
import '../styles/navbar.css';

// Placeholder for a user icon or profile picture
const UserProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

// Placeholder for a hamburger icon
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          !event.target.closest('.navbar-menu-toggle') && // Don't close if toggle itself is clicked
          !event.target.closest('.navbar-user-profile-link')) { // Don't close if profile link is clicked
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Placeholder: check if user is logged in (you'd replace this with actual auth logic)
  const isLoggedIn = true; // Assume user is logged in for profile display

  return (
    <nav className="main-navbar">
      <div className="navbar-logo">
        <Link to="/">My LinkedIn AI App</Link>
      </div>
      <div className="navbar-right-section">
        {isLoggedIn && (
          // Wrap the user profile icon with a Link component
          <Link to="/profile" className="navbar-user-profile-link" aria-label="View profile">
            <div className="navbar-user-profile">
              <UserProfileIcon />
              {/* You could add username here if desired */}
              {/* <span className="username-display">User Name</span> */}
            </div>
          </Link>
        )}
        
        <button onClick={toggleMenu} className="navbar-menu-toggle" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <MenuIcon />
        </button>

        {isMenuOpen && (
          <div className="navbar-menu-dropdown" ref={menuRef}>
            <ul>
              {isLoggedIn && ( // Show profile link in dropdown too if desired, or just rely on icon
                <li><Link to="/profile" onClick={() => setIsMenuOpen(false)}>My Profile</Link></li>
              )}
              <li><Link to="/home" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
              <li><Link to="/generate" onClick={() => setIsMenuOpen(false)}>Generate Message</Link></li>
              <li className="menu-features-header">Features</li>
              <li><Link to="/features/resume-analyzer" onClick={() => setIsMenuOpen(false)}>Resume Analyzer</Link></li>
              <li><Link to="/features/history" onClick={() => setIsMenuOpen(false)}>Message History</Link></li>
              <hr className="menu-divider" />
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <hr className="menu-divider" />
              {isLoggedIn ? (
                <li><Link to="/logout" onClick={() => {
                  setIsMenuOpen(false); 
                  // Add actual logout logic here
                  alert('Logout functionality to be implemented!'); 
                }}>Logout</Link></li>
              ) : (
                <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login/Signup</Link></li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;