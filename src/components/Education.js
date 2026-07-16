import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Education.css';
function Education() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <section id="education" className="education-section">
      <div className="education-content" data-aos="fade-up">
        <h1 className="exp-heading" data-aos="fade-down">Expertize</h1>

        <div className="education-grid">
          <div className="education-card" data-aos="fade-right">
            <h2>B.Tech - AI & Data Science</h2>
            <p>
              Sri Krishna College of Technology, Coimbatore (2023–2027)
              <br /> <strong>Aggregate:</strong> 7.74 CGPA
            </p>
          </div>

          <div className="education-card" data-aos="fade-up">
            <h2>Internship</h2>
            <ul>
              <li>
                <h3>Java Programming</h3>
                <p><strong>Phoenix Softech, Madurai</strong> | April 2025 | 15-Day Training</p>
              </li>
              <li>
                <h3>Data Science</h3>
                <p><strong>ASCOX Technosoft Solution PVT LTD, Madurai</strong> | May 2026 | 15-Day Training</p>
              </li>
            </ul>

          </div>

          <div className="education-card" data-aos="fade-left">
            <h2>Certifications</h2>
            <ul>
              <li>Speech Contest Certificate (2018–2019)</li>
              <li>Intro to Artificial Intelligence - Great Learning</li>
              <li>React Web Developer Certification - Infosys</li>
              <li>Programming using Java - Infosys</li>
              <li>Data Structures & Algorithms using Java - Infosys</li>
              <li>Effective Writing - NPTEL</li>
              <li>Microsoft Certified: Azure Fundamentals</li>
              <li>Learnathon Participation (2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
