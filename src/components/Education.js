import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css';

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="education-content" data-aos="fade-up">
        <h1 data-aos="fade-down">Expertise</h1>

        <div className="education-item" data-aos="fade-right">
          <h2>B.Tech - Artificial Intelligence and Data Science</h2>
          <p>
            Sri Krishna College of Technology, Coimbatore (2023–2027) — Aggregate: 7.73 CGPA
          </p>
        </div>

        <div className="education-item" data-aos="fade-left" data-aos-delay="100">
          <h2>Certifications</h2>
          <ul>
            <li>Speech Contest Certificate at School, 2018–2019</li>
            <li>DRONE CODING AND SIMULATION - Workshop Certificate, 2024</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
