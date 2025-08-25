
import React, { useEffect ,useState} from 'react';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Aboutme.css';
import seeni from '../assests/seeni.jpg';

function Aboutme() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToProjects = () => {
    if (isMobile) {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/projects");
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
            I am <strong>Seeniselvam B</strong>, a passionate and detail-oriented <strong>Full-Stack Developer</strong> 
            with a strong foundation in <strong>Artificial Intelligence and Data Science</strong>. Currently pursuing my 
            <strong> B.Tech in AI & DS at Sri Krishna College of Technology, Coimbatore</strong>, I specialize in building 
            responsive, user-friendly <strong>Web and Mobile Applications</strong> using React.js, React Native, Spring Boot, and Java.
          </p>
          <p>
            I have hands-on experience developing real-world projects, including a responsive website for 
            <strong> CSI Immanuel Church, Chithumoondradaippu</strong>, which helps the community access church history, worship timings, 
            and events online. Additionally, during my <strong>Internship at Phoneix Softech</strong>, I gained practical 
            experience in Java programming and software development workflows.
          </p>
          <p>
            My short-term goal is to strengthen my expertise in <strong>Full-Stack Development</strong>, while my long-term aspiration 
            is to contribute to impactful <strong>AI-Driven Projects</strong> that solve real-world problems and create meaningful 
            digital solutions.
          </p>
          <button className="cta-button" onClick={goToProjects}>
          View Projects
        </button>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
