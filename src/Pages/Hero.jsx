import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Aman Jachpure</span></h1>
        <h2>Java Backend Developer</h2>
        <p>I build robust backend systems using Java, Spring Boot & Hibernate.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Contact Me</a>
          <a href="/AmanJachpureResume.pdf" className="btn btn-outline" download>Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;