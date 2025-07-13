import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Achievement.css';

const projects = [
  {
    id: 1,
    title: "CSI IMMANUEL CHURCH WEBSITE",
    image: "/assests/Church2.png",
    description: "A responsive and interactive website built for CSI IMMANUEL CHURCH, Chithumoondradaippu, showcasing the church’s history, worship timings, media gallery, event branches. Developed using React.js and deployed on GitHub Pages and Vercel, the site includes smooth navigation, scroll animations, and Google Maps integration for location visibility — all optimized for mobile and desktop viewing.",
    link: "https://csiimmanuelchurchcmu.vercel.app"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is project two description with moderate length content to test height alignment.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/project-two"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Short description.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/project-three"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projectname" data-aos="fade-down">My Projects</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>
              {project.description.length > 100
                ? <>
                    {project.description.substring(0, 100)}...
                    <span className="read-more" onClick={() => openModal(project)}> Read more</span>
                  </>
                : project.description}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h3 className="modal-title">{selectedProject.title}</h3>
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <p>{selectedProject.description}</p>
              <div className="center-link">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
