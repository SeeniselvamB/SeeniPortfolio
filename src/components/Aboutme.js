
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Aboutme.css';
import seeni from '../assests/seeni.jpg';

function Aboutme() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-content glass-card">
        <div className="about-image" data-aos="fade-right">
          <img
            src={seeni}
            alt="Seeniselvam B"
            className="seeni-image"
          />
        </div>
        <div className="about-text" data-aos="fade-left">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hi, I am SEENISELVAM B from Virudhunagar, currently pursuing a B.Tech in Artificial Intelligence and Data Science at Sri Krishna College of Technology, Coimbatore.
          </p>
          <p>
            I have developed a website for my native church, <strong>CSI Immanuel Church, Chithumoondradaippu</strong>, to share information, events, and church history with the community.
            I have also completed an internship at <strong>Phoneix Softech</strong>, where I gained hands-on experience in <strong>Java Programming</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
