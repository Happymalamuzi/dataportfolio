// src/components/Hero.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/Hero.css';
import happyImage from '../assets/p.jpg'; // Replace with your image path

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hello">HELLO!!</h1>
          <h2 className="name">I AM HAPPY MALAMUZI</h2>
          <p className="tagline">Data Analyst | Web Developer | Corporate Trainer</p>
          <a href="/happy.pdf" download className="btn">
            <FontAwesomeIcon icon={faDownload} /> Download My CV
          </a>
        </div>
        <div className="hero-image">
          <img src={happyImage} alt="Happy Malamuzi" />
        </div>
      </div>
    </section>
  );
};

export default Hero;