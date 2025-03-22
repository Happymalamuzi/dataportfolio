// src/components/Projects.jsx
import React, { useState } from 'react';
import '../styles/Projects.css';
import project1Image1 from '../images/heart1.png';
import project1Image2 from '../images/heart2.png';
import project2Image1 from '../images/covid.png';
import project2Image2 from '../images/covid2.png';
import project3Image1 from '../images/student1.jpg';
import project3Image2 from '../images/student2.jpg';
import project4Image1 from '../images/survey1.jpg';
import project4Image2 from '../images/survey2.jpg';
import project5Image1 from '../images/wife1.jpg';
import project5Image2 from '../images/wife2.jpg';

const projects = [
  {
    id: 1,
    title: "Predictive Model for Hospital Patient Readmission",
    description: "Built a machine learning model to predict heart attack risks with 86% accuracy.",
    tools: "Scikit-learn, Pandas, Matplotlib",
    images: [project1Image1, project1Image2],
    details: "This project involved analyzing patient data to predict the likelihood of readmission. The model was trained using Scikit-learn and achieved an accuracy of 86%. Key features included age, blood pressure, and cholesterol levels.",
  },
  {
    id: 2,
    title: "COVID-19 Data Visualization Dashboard",
    description: "Developed an interactive Power BI dashboard tracking regional infection rates and vaccine distribution.",
    tools: "Power BI, SQL, APIs",
    images: [project2Image1, project2Image2],
    details: "This dashboard provided real-time insights into COVID-19 infection rates and vaccine distribution across regions. Data was aggregated from APIs and visualized using Power BI.",
  },
  {
    id: 3,
    title: "Student Performance Analysis",
    description: "Analyzed academic datasets to identify key factors affecting student performance.",
    tools: "Excel, SQL",
    images: [project3Image1, project3Image2],
    details: "This project analyzed student performance data to identify trends and factors affecting academic success. Insights were visualized using Excel and SQL queries.",
  },
  {
    id: 4,
    title: "Village Hustle Survey",
    description: "Conducted community-based data collection to identify common income-generating activities in villages around Zomba.",
    tools: "Google Sheets, Data Analysis",
    images: [project4Image1, project4Image2],
    details: "This project involved conducting a survey to identify income-generating activities in villages around Zomba. Data was collected using Google Sheets and analyzed to provide insights for development programs.",
  },
  {
    id: 5,
    title: "WiFi Utilization Survey",
    description: "Investigated WiFi usage patterns on Mubarak Complex College campus to improve connectivity.",
    tools: "Custom App, Excel Dashboards",
    images: [project5Image1, project5Image2],
    details: "This project involved developing a custom app to collect WiFi usage data on campus. Excel dashboards were created to analyze the data and provide recommendations for optimizing WiFi infrastructure.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tools Used:</strong> {project.tools}</p>
              <button onClick={() => openModal(project)} className="btn">View More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>✕</button>
            <h3>{selectedProject.title}</h3>
            <div className="modal-images">
              {selectedProject.images.map((image, index) => (
                <img key={index} src={image} alt={`${selectedProject.title} Image ${index + 1}`} />
              ))}
            </div>
            <p>{selectedProject.details}</p>
            <p><strong>Tools Used:</strong> {selectedProject.tools}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;