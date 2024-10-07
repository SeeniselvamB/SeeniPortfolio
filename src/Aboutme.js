import React from 'react';
import './Aboutme.css';
import seeni from '../src/assests/seeni.jpg';

function Aboutme() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img
            src={seeni}
            alt="Seeniselvam B"
            className="seeni-image"
          />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p className="p-section">
            Hi I am SEENISELVAM B.I am currently pursuing B.Tech in Artificial Intelligence and Data Science at
            Sri Krishna College of Technology.
            I completed my schooling at Government Higher Secondary School, Mallanginar, Virudhunagar in 2023.
        </p>
          <p className="p-section">
            My skills include quick learner, problem-solving, leadership, volunteering, and presentations. My hobbie is to continuosly acquire knowledge, listening to music and watching TV.
            My short-term goal is to complete my degree with good CGPA. My long-term goal is to secure a good position in a reputable company with a good salary.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
