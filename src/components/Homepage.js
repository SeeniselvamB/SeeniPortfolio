import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

function Homepage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Disable scrolling and navbar links before unlock
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
    };
  }, [isUnlocked]);

  const unlockWebsite = () => {
    setIsUnlocked(true);
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content glass-card" data-aos="fade-down">
        <h1 className="home-title">Seeniselvam B</h1>
        <p className="home-subtitle" data-aos="fade-up">
          B.Tech | AI & Data Science | React Developer
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
