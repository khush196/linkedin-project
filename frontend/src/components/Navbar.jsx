import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; 

function Navbar() {
  return (
    <nav>
      <div className="logo">My LinkedIn AI App</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>  {/* Add About, Contact, etc. */}
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/login">Login/Signup</Link></li> {/* Login/Signup button */}
      </ul>
    </nav>
  );
}

export default Navbar;