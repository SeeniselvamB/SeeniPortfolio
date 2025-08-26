import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">SEENISELVAM</div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>☰</div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {isMobile ? (
          <>
            <li>
              <ScrollLink 
                to="home" smooth duration={500} 
                onClick={closeMenu} activeClass="active" spy
              >Home</ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="about" smooth duration={500} 
                onClick={closeMenu} activeClass="active" spy
              >About</ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="education" smooth duration={500} 
                onClick={closeMenu} activeClass="active" spy
              >Expertize</ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="skills" smooth duration={500} 
                onClick={closeMenu} activeClass="active" spy
              >Skills</ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="projects" smooth duration={500} 
                onClick={closeMenu} activeClass="active" spy
              >Projects</ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="contact" smooth duration={500} 
                onClick={closeMenu} activeClass="active" spy
              >Contact</ScrollLink>
            </li>
          </>
        ) : (
          <>
            <li><Link className={location.pathname === "/" ? "active" : ""} to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link className={location.pathname === "/about" ? "active" : ""} to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link className={location.pathname === "/education" ? "active" : ""} to="/education" onClick={closeMenu}>Expertize</Link></li>
            <li><Link className={location.pathname === "/skills" ? "active" : ""} to="/skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link className={location.pathname === "/projects" ? "active" : ""} to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link className={location.pathname === "/contact" ? "active" : ""} to="/contact" onClick={closeMenu}>Contact</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
