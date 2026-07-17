import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';

function Homepage() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleKnowMore = () => {
    setShowButton(false);
    scroller.scrollTo('about', {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content glass-card" data-aos="fade-down">
        <h1 className="home-title">Seeniselvam B</h1>
        <p className="home-subtitle" data-aos="fade-up">
          B.Tech | AI & Data Science | Full Stack Developer
        </p>

        {showButton && (
          <button className="cta-button" onClick={handleKnowMore}>
            Know More About Me
          </button>
        )}
      </div>
    </section>
  );
}

export default Homepage;
