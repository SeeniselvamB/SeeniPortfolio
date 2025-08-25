import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

function Homepage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    document.body.style.overflow = isUnlocked ? 'auto' : 'hidden';

    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
      if (!isUnlocked) {
        link.classList.add('disabled-link');
      } else {
        link.classList.remove('disabled-link');
      }
    });

    return () => {
      document.body.style.overflow = 'auto';
      links.forEach(link => link.classList.remove('disabled-link'));
      window.removeEventListener("resize", handleResize);
    };
  }, [isUnlocked]);

 
  const unlockWebsite = () => {
  setIsUnlocked(true);

  if (isMobile) {
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  } else {
    
    navigate("/about");
  }
};

  return (
    <section id="home" className="home-section">
      <div className="home-content glass-card" data-aos="fade-down">
        <h1 className="home-title">Seeniselvam B</h1>
        <p className="home-subtitle" data-aos="fade-up">
          B.Tech | AI & Data Science | Full Stack Developer
        </p>

        {!isUnlocked && (
          <button className="cta-button" onClick={unlockWebsite}>
            Know More About Me
          </button>
        )}
      </div>
    </section>
  );
}

export default Homepage;
