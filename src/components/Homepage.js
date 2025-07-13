import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

function Homepage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content glass-card" data-aos="fade-down">
        <h1 className="home-title">Seeniselvam B</h1>
        <p className="home-subtitle" data-aos="fade-up">
          B.Tech | AI & Data Science | React Developer
        </p>

        {!showContent && (
          <>
            <div className="home-dashboard" data-aos="zoom-in">
              <div className="dashboard-tile">🌐 Web Projects</div>
              <div className="dashboard-tile">📚 Education</div>
              <div className="dashboard-tile">💡 Skills</div>
              <div className="dashboard-tile">📞 Contact</div>
            </div>
            <Link to="about" smooth={true} duration={500} onClick={() => setShowContent(true)}>
              <button className="cta-button">Know More About Me</button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default Homepage;
