import React, { useState, useEffect } from 'react';
import './App.css';

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button className="fab" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
}

export default ScrollToTop;
