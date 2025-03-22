// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

const skills = [
  { name: "Data Analysis", level: 90 },
  { name: "Python", level: 85 },
  { name: "SQL", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "Data Visualization", level: 85 },
  { name: "Excel", level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;