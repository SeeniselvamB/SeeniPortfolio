import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';

function Skills() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
      window.scrollTo(0, 0);
    }, []);
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title" data-aos="fade-down">Skills</h2>
      <div className="skills-container">
        <div className="skills-box" data-aos="fade-up" data-aos-delay="0">
          <h3>Technical Skills</h3>
          <ul className="skills-list">
            <li>Java</li>
            <li>React</li>
            <li>Spring Boot</li>
            <li>SQL</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="skills-box" data-aos="fade-up" data-aos-delay="100">
          <h3>Soft Skills</h3>
          <ul className="skills-list">
            <li>Communication</li>
            <li>Team Collaboration</li>
            <li>Leadership</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
