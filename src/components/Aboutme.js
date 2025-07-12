import React from 'react';
import './Aboutme.css';
import seeni from '../assests/seeni.jpg'; // ✅ Correct path

function Aboutme() {
  return (
    <section id="about" className="about-section">
      <div className="about-overlay">
        <div className="about-image">
          <img
            src={seeni}
            alt="Seeniselvam B"
            className="seeni-image"
          />
        </div>
        <div className="about-text">
          <h1 className="about">About Me</h1>
          <p>
          Hi, I am SEENISELVAM B from Virudhunagar, currently pursuing a B.Tech in Artificial Intelligence and Data Science at Sri Krishna College of Technology.
          </p>
          <p>
          I have developed a website for my native church, <strong>CSI Immanuel Church</strong>, to share information, events, and church history with the community.
          I have also completed an internship at <strong>Phoneix Softech</strong>, where I gained hands-on experience in <strong>Basic Java Programming</strong>.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Aboutme;
