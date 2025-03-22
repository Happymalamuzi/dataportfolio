// src/components/Education.jsx
import React from 'react';
import '../styles/Education.css';

const education = [
  {
    id: 1,
    institution: "Mubarak Complex College",
    degree: "Advanced Diploma in ICT, Data Analytics Track",
    duration: "April 2023 – January 2025",
    details: [
      "Relevant Coursework: System Design, Statistics, Database Systems, Information Systems.",
      "Capstone Project: Developed a predictive model for cardiovascular disease risk.",
    ],
  },
  {
    id: 2,
    institution: "High School",
    degree: "Malawi School Certificate of Education",
    duration: "2018 – 2022",
    details: [
      "Relevant Subjects: Mathematics, Physics, Computer Studies.",
      "Achievements: 28 points in National Examinations.",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-content">
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="duration">{edu.duration}</p>
                <ul>
                  {edu.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;