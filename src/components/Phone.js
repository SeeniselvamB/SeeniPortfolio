
import React, { useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Phone.css'; // Make sure this is correctly linked

function Contacts() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2 data-aos="fade-down">Contact Me</h2>

      {/* Social Media & Email Links */}
      <div className="social-media">
        <ul>
          <li data-aos="fade-up" data-aos-delay="0">
            <a href="mailto:bseeniselvam2006@gmail.com">
              <FaEnvelope size={30} /> Email
            </a>
          </li>
          <li data-aos="fade-up" data-aos-delay="100">
            <a href="https://www.linkedin.com/in/seeniselvam-b-10b521290" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} /> LinkedIn
            </a>
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <a href="https://www.instagram.com/seeniselvam_2006" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} /> Instagram
            </a>
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
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
