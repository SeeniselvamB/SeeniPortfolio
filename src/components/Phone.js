import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './Phone.css'; // Make sure this is correctly linked

function Contacts() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      {/* Social Media & Email Links */}
      <div className="social-media">
        <ul>
          <li>
            <a href="mailto:bseeniselvam2006@gmail.com">
              <FaEnvelope size={30} /> Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/seeniselvam-b-10b521290" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/seeniselvam_2006" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/SeeniselvamB" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
