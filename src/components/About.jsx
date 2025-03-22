// src/components/About.jsx
import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/n.jpg'; // Replace with your image path

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            <img src={profileImage} alt="Happy Malamuzi" />
          </div>
          <p>
          "A detail-oriented and motivated ICT graduate with a specialization
           in Data Analysis. Possesses strong technical skills in data management, 
           software development, and problem-solving. Experienced in leveraging data to 
           drive actionable insights, optimize processes, and support decision-making. 
           Proficient in tools like Python, SQL, and Power BI, with a passion for transforming
            raw data into meaningful solutions. Committed to continuous learning and delivering high-quality results in dynamic environments."
          </p>
          <div className="about-details">
            <div className="about-item">
              <h3>Education</h3>
              <p>Advanced Diploma in ICT, Data Analytics Track</p>
              <p>Mubarak Complex College (2023 - 2025)</p>
            </div>
            <div className="about-item">
              <h3>Skills</h3>
              <ul>
                <li>Data Analysis</li>
                <li>Python, SQL</li>
                <li>Machine Learning</li>
                <li>Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;