import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Achievement";
import Contacts from "./components/Phone";
import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Homepage />
                  </section>

                  <section id="about">
                    <Aboutme />
                  </section>

                  <section id="education">
                    <Education />
                  </section>
                   <section id="skills">      
                    <Skills />
                  </section>

                  <section id="projects">
                    <Projects />
                  </section>

                  <section id="contact">
                    <Contacts />
                  </section>
                </>
              }
            />

          
            <Route path="/about" element={<Aboutme />} />
            <Route path="/education" element={<Education />} />
             <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
