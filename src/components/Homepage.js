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




// import React, { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Home.css';

// function Homepage() {
//   const [isUnlocked, setIsUnlocked] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     if (!isUnlocked) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       setTimeout(() => {
//         document.body.style.overflow = 'auto';
//       }, 50);
//     }

//     const links = document.querySelectorAll('.navbar a');
//     links.forEach(link => {
//       if (!isUnlocked) {
//         link.classList.add('disabled-link');
//       } else {
//         link.classList.remove('disabled-link');
//       }
//     });

//     return () => {
//       document.body.style.overflow = 'auto';
//       links.forEach(link => link.classList.remove('disabled-link'));
//     };
//   }, [isUnlocked]);

//   const unlockWebsite = () => {
//     setIsUnlocked(true);

//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });

//       setTimeout(() => {
//         if (window.scrollY === 0 && aboutSection.getBoundingClientRect().top !== 0) {
//           aboutSection.scrollIntoView({ behavior: "instant" });
//         }
//       }, 600);
//     } else {
//       console.warn("The 'About Me' section (#about) was not found. Cannot scroll.");
//     }
//   };

//   return (
//     <section id="home" className="home-section">
//       <div className="home-portfolio-card" data-aos="fade-down">
//         <p className="portfolio-label">GRAPHIC DESIGNER</p>
//         <h1 className="portfolio-title">PORTFOLIO</h1>
//         <div className="name-box">
//           <p className="portfolio-name">Howard Ong</p>
//         </div>

//         {!isUnlocked && (
//           <button className="cta-button" onClick={unlockWebsite}>
//             Know More About Me
//           </button>
//         )}
//       </div>

//       <div className="ring-overlay-top-right"></div>
//       <div className="ring-overlay-bottom-left"></div>

//       <div className="decor-top-left"></div>
//       <div className="decor-bottom-right"></div>
//       <div className="chevron-top-right"></div>
//       <div className="chevron-bottom-left"></div>
//       <div className="x-top-left"></div>
//       <div className="x-bottom-right"></div>

//       <div className="website-link">www.reallygreatsite.com</div>
//     </section>
//   );
// }

// export default Homepage;