// import React, { useState } from 'react';
// import './Achievement.css';

// const projects = [
//   {
//     id: 1,
//     title: "CSI IMMANUEL CHURCH Website",
//     image: "/assests/Church2.png",
//     description: "A responsive and interactive website built for CSI IMMANUEL CHURCH, Chithumoondradaippu, showcasing the church’s history, worship timings, media gallery, event branches. Developed using React.js and deployed on GitHub Pages and Vercel, the site includes smooth navigation, scroll animations, and Google Maps integration for location visibility — all optimized for mobile and desktop viewing.",
//     link: "https://csiimmanuelchurchcmu.vercel.app"
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     description: "Project two description with details to test modal opening behavior and display content cleanly.",
//     image: "https://via.placeholder.com/150",
//     link: "https://github.com/yourusername/project-two"
//   },
//   {
//     id: 3,
//     title: "Project Three",
//     description: "Project three. A minimal showcase of content with modal enabled.",
//     image: "https://via.placeholder.com/150",
//     link: "https://github.com/yourusername/project-three"
//   }
// ];

// function Projects() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleReadMore = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="projectname">My Projects</h2>
//       <div className="projects-list">
//         {projects.map(project => (
//           <div key={project.id} className="project-card">
//             <img src={project.image} alt={project.title} className="project-image" />
//             <h3>{project.title}</h3>
//             <p className="project-description">
//               {project.description.length > 100
//                 ? `${project.description.slice(0, 100)}...`
//                 : project.description}
//             </p>
//             {project.description.length > 100 && (
//               <button onClick={() => handleReadMore(project)} className="read-more-btn">Read more</button>
//             )}
//             <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>

//       {selectedProject && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={e => e.stopPropagation()}>
//             <h3>{selectedProject.title}</h3>
//             <p>{selectedProject.description}</p>
//             <button onClick={closeModal} className="close-btn">Close</button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Projects;
import React, { useState } from 'react';
import './Achievement.css';

const projects = [
  {
    id: 1,
    title: "CSI IMMANUEL CHURCH Website",
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

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className='projectname'>My Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
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
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-btn">✖</button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <p>{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
