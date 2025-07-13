import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
  <h2 className="skills-title">Skills</h2>
  <div className="skills-container">
    <div className="skills-box">
      <h3>Technical Skills</h3>
      <ul className="skills-list">
        <li>Java</li>
        <li>React</li>
        <li>Spring Boot</li>
        <li>SQL</li>
        <li>Git & GitHub</li>
      </ul>
    </div>
    <div className="skills-box">
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
