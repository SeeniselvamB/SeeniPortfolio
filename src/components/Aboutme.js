import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Aboutme.css';
import seeni from '../assests/seeni.jpg';

function Aboutme() {


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const goToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (

    <section id="about" className="about-section">
      <h1 className="about-heading" data-aos="fade-down">About Me</h1>
      <div className="about-content glass-card">
        <div className="about-image" data-aos="fade-right">
          <img
            src={seeni}
            alt="Seeniselvam B"
            className="seeni-image"
          />
        </div>
        <div className="about-text" data-aos="fade-left">
          <p>
            I am Seeniselvam B, a passionate Artificial Intelligence and Data Science undergraduate at Sri Krishna College of Technology, Coimbatore,
            with a strong interest in Full Stack Development and Artificial Intelligence. I enjoy building modern, responsive, and user-centric web
            applications that combine clean design with efficient functionality.
          </p>
          <p>
            With hands-on experience in React.js, Spring Boot, Java, Python, MySQL, HTML, CSS, and JavaScript, I have developed projects that address
            real-world challenges while strengthening my problem-solving and software development skills. I am committed to writing clean, maintainable
            code and creating applications that deliver an excellent user experience.
          </p>
          <p>
            I am a continuous learner who enjoys exploring new technologies, improving my technical expertise, and embracing challenges that foster both
            personal and professional growth. My goal is to begin my career as a Software Engineer, contributing to innovative solutions while expanding my
            knowledge in software engineering, full-stack development, and artificial intelligence.I believe that technology has the power to solve meaningful
            problems, and I am motivated to create impactful, scalable, and user-friendly applications that make a difference.
          </p>
          <div className="about-btn">
            <button className="cta-button" onClick={goToProjects}>
              View Projects
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Aboutme;
