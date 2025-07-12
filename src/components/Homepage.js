import React from 'react';
import './Home.css';
import { Link } from 'react-scroll';

function Homepage() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="h1">Seeniselvam B</h1>
        <Link to="about" smooth={true} duration={500}>
        <button className="cta-button">Know More About Me</button>
        </Link>
      </div>
    </section>
  );
}

export default Homepage;


