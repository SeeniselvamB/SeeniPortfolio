import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Skills.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "SQL"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Spring Boot", "RESTful APIs"],
    },
    {
      title: "Computer Science",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS"],
    },
    {
      title: "AI & Data Science",
      skills: ["Machine Learning", "Deep Learning"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Microsoft Excel",
        "Power BI",
        "Git",
        "GitHub",
        "Vercel",
        "Expo",
        "EmailJS",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Quick Learning",
        "Collaboration",
        "Leadership",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title" data-aos="fade-down">
        Skills
      </h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="skills-box"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3>{category.title}</h3>

            <ul
              className={`skills-list ${
                category.skills.length % 2 === 0
                  ? "even-skills"
                  : "odd-skills"
              }`}
            >
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
