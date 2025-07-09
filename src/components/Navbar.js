// import React, { useState } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-logo">SEENISELVAM</div>
//       <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>☰</div>
//       <ul className={isOpen ? "nav-links open" : "nav-links"}>
//         <li>
//           <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>
//             Home
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>
//             About
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="education" smooth={true} duration={500} onClick={closeMenu}>
//             Education
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="projects" smooth={true} duration={500} onClick={closeMenu}>
//             Projects
//           </ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>
//             Contact
//           </ScrollLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">SEENISELVAM</div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>☰</div>
      


      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="education" smooth={true} duration={500} onClick={closeMenu}>
            Education
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="projects" smooth={true} duration={500} onClick={closeMenu}>
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

