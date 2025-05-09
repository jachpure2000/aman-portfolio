import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>E-Commerce App</h3>
          <p>Java + Spring Boot based shopping platform with cart, payment, and admin panel.</p>
          <a href="https://github.com/jachpure2000/ecommerce-app" target="_blank" rel="noreferrer">View Code</a>

        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>This very portfolio website built using React and CSS!</p>
          <a href="https://github.com/jachpure2000/aman-portfolio" target="_blank" rel="noreferrer">View Code</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;