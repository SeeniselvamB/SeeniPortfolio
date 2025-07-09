import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">My Portfolio</div>

        {/* ☰ Toggle button */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* React Router Links */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Me</Link>
          <Link to="/education" onClick={closeMenu}>Education</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
