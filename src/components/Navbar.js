import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">SEENISELVAM B</div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>☰</div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
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
      </ul>
    </nav>
  );
};

export default Navbar;