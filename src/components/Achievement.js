import React from 'react';
import './Achievement.css';

const projects = [
  {
    id: 1,
    title: "CSI IMMANUEL CHURCH Website",
    image:"/assests/Church2.png",
    description: "A responsive and interactive website built for CSI IMMANUEL CHURCH, Chithumoondradaippu, showcasing the church’s history, worship timings, media gallery, event branches. Developed using React.js and deployed on GitHub Pages and Vercel, the site includes smooth navigation, scroll animations, and Google Maps integration for location visibility — all optimized for mobile and desktop viewing.",
    link: "https://csiimmanuelchurchcmu.vercel.app" // Project link (e.g., GitHub)
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two.",
    image: "https://via.placeholder.com/150", // Replace with your image URL
    link: "https://github.com/yourusername/project-two"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    image: "https://via.placeholder.com/150", // Replace with your image URL
    link: "https://github.com/yourusername/project-three"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className='projectname'>My Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
