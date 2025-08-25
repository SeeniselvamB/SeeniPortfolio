import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css';
function Education() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSkills = () => {
    if (isMobile) {
      setTimeout(() => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate("/skills");
    }
  };
  return (
    <section id="education" className="education-section">
      <div className="education-content" data-aos="fade-up">
        <h1 data-aos="fade-down">Expertize</h1>

        <div className="education-grid">
          <div className="education-card" data-aos="fade-right">
            <div className="icon"></div>
            <h2>B.Tech - AI & Data Science</h2>
            <p>
              Sri Krishna College of Technology, Coimbatore (2023–2027)  
              <br /> <strong>Aggregate:</strong> 7.73 CGPA
            </p>
          </div>

          <div className="education-card" data-aos="fade-up">
            <div className="icon"></div>
            <h2>Internship</h2>
            <ul>
              <li>Java Programming at <strong>Phoneix Softech, Madurai</strong></li>
            </ul>
          </div>

          <div className="education-card" data-aos="fade-left">
            <div className="icon"></div>
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
        <div className="view-skills-container" >
          <button className="cta-button" onClick={goToSkills}>
            View Skills
          </button>
        </div>
      </div>
    </section>
  );
}

export default Education;
