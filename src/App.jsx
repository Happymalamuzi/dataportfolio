// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;