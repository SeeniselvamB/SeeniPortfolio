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
    title: "BookStore Web App",
    description: "This project is an online bookstore web app built with React. Users can search for books through the Google Books API and add them to a shopping cart. The cart is stored in localStorage and can be updated anytime. At checkout, the app sends the selected book links (PDF or Google Books preview) directly to the user’s email using EmailJS, making the process simple and efficient.",
    image: "/assests/book.png",
    link: "https://onlinebookstoreapp.vercel.app/"
  },
  
  {
    id: 3,
    title: "ToyStore Application – Backend Development",
    description: "Developed a backend system for a toy store using Spring Boot. The application manages products, inventory, orders, and users with RESTful APIs. Integrated Spring Data JPA for database operations, Spring Security for authentication, and ensured smooth CRUD operations for toys and orders.",
    image: "/assests/toy.jpg",
    link: "https://github.com/iamneo-production/b0454922-3776-4d76-bc1e-2bebe61b6e63-863d052f-c59f-43c1-9760-847842d682a1/tree/An-Interactive-Toy-Store-Application-with-Age-Appropriate-Recommendations-and-Discounts%C2%A0-SeeniselvamB"
  },
  
  {
    id: 4,
    title: "Scientific Calculator",
    description: "Developed a desktop scientific calculator using Python and Tkinter. It supports basic arithmetic operations (addition, subtraction, multiplication, division) and advanced functions like sin, cos, tan, logarithm, exponent, factorial, power, square root, and constants like π and e. The GUI is interactive, with hover effects, keyboard bindings, and dynamic input/output fields for a user-friendly experience.",
    image: "/assests/calu.jpg",
    link: ""
  },
  {
    id: 5,
    title: "Salary Calculator App",
    description: "A cross-platform mobile application built with React Native and Spring Boot for calculating weekly salaries. The app allows users to input in-time, out-time, hourly rate, and leave days, automatically calculating total working hours and salary. Data is securely stored in a Spring Boot + MySQL backend with REST APIs. Developed with a clean, user-friendly interface and packaged as an Android APK via Expo EAS Build, ensuring accessibility and smooth performance across devices.",
    image: "/assests/calc.png",
    link: "https://drive.google.com/file/d/1yVDnpo6w8o9NF6rtZ9xB2wSEZZoVdpBG/view?usp=drive_link"
  },

  {
    id: 6,
    title: "Learning Management System",
    description: "Learning Management System (LMS) is a web-based platform that facilitates seamless online education through role-based access. Admins manage users, instructors, and courses, ensuring smooth platform operations. Instructors can create and manage courses, quizzes, and monitor student progress, while students can access courses, complete quizzes, and track their learning performance. The system provides an organized, interactive, and efficient environment for course management and performance analysis.",
    image: "/assests/lms.png",
    link: "https://learnsystem.vercel.app"
  },
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
