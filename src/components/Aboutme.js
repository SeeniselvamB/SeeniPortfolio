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
          <h1>About Me</h1>
          <p>
            Hi, I am SEENISELVAM B. I come from Virudhunagar and am currently pursuing a B.Tech in Artificial Intelligence and Data Science at
            Sri Krishna College of Technology.
            I completed my schooling at Government Higher Secondary School, Mallanginar, Virudhunagar in 2023.
          </p>
          <p>
            My skills include quick learning, problem-solving, leadership, volunteering, and delivering presentations.
            My hobbies include continuously acquiring knowledge, listening to music, and watching TV.
            My short-term goal is to complete my degree with a good CGPA. My long-term goal is to secure a good position in a reputable company with a good salary.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
