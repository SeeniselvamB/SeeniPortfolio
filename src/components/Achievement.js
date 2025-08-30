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
    title: "Salary Calculator App",
    description: "A cross-platform mobile application built with React Native and Spring Boot for calculating weekly salaries. The app allows users to input in-time, out-time, hourly rate, and leave days, automatically calculating total working hours and salary. Data is securely stored in a Spring Boot + MySQL backend with REST APIs. Developed with a clean, user-friendly interface and packaged as an Android APK via Expo EAS Build, ensuring accessibility and smooth performance across devices.",
    image: "/assests/calc.png",
    link: "https://expo.dev/accounts/seeniselvam/projects/salary-calculator/builds/5b850cdd-410e-43b6-82f2-997dc90ea71f"
  },
  {
    id: 3,
    title: "BookStore Web App",
    description: "This project is an online bookstore web app built with React. Users can search for books through the Google Books API and add them to a shopping cart. The cart is stored in localStorage and can be updated anytime. At checkout, the app sends the selected book links (PDF or Google Books preview) directly to the user’s email using EmailJS, making the process simple and efficient.",
    image: "/assests/book.png",
    link: "https://onlinebookstoreapp.vercel.app/"
  },
  {
    id: 4,
    title: "Project Four",
    description: "Short description.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/project-three"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
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
