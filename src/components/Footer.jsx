// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="http://www.linkedin.com/in/happy-malamuzi-47a320295" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:happymalamuzi@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
            <a href="https://github.com/Happymalamuzi" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <p className="copyright">&copy; 2023 Happy Malamuzi. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top">
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;