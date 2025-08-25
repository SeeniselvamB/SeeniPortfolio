import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">SEENISELVAM</div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>☰</div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {isMobile ? (
          // 📱 Mobile → Scroll links
          <>
            <li><ScrollLink to="home" smooth duration={500} onClick={closeMenu}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth duration={500} onClick={closeMenu}>About</ScrollLink></li>
            <li><ScrollLink to="education" smooth duration={500} onClick={closeMenu}>Expertize</ScrollLink></li>
            <li><ScrollLink to="skills" smooth duration={500} onClick={closeMenu}>Skills</ScrollLink></li>
            <li><ScrollLink to="projects" smooth duration={500} onClick={closeMenu}>Projects</ScrollLink></li>
            <li><ScrollLink to="contact" smooth duration={500} onClick={closeMenu}>Contact</ScrollLink></li>
          </>
        ) : (
          // 💻 Desktop → Router links
          <>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/education" onClick={closeMenu}>Expertize</Link></li>
            <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
