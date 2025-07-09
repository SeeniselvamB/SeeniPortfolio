import React from 'react';
import './Achievement.css';
// Sample project data
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description of project one.",
    image: "https://via.placeholder.com/150", // Replace with your image URL
    link: "https://github.com/yourusername/project-one" // Project link (e.g., GitHub)
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
