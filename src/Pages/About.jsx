import React from 'react';
import './About.css'; // Import the CSS file for styling
const About = () => (
    <section id="about" >
    <div className="fade-in">
      <h2>About Me</h2>
      <p>I’m Aman Jachpure, a Java Backend Developer with experience in Spring Boot, REST APIs, and system design.</p>
        <p>I have a passion for building scalable and efficient backend systems, and I’m always eager to learn new technologies.</p>
        </div>
        <div className="about-content">
          <h3>Skills</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Hibernate</li>
            <li>REST APIs</li>
            <li>MySQL</li>
            <li>Git & GitHub</li>
          </ul>
          </div>
            <div className="about-content">
                <h3>Education</h3>
                <p>Bachelor of Engineering in Computer Science from RGPV University</p>
                <p>Completed various online courses in Java and Spring Boot</p>
            </div>
            <div className="about-content">
                <h3>Experience-1</h3>
                <p>Affimintus Technology From Indore</p>
                <h4>Position</h4>
                <p>Java Developer</p>
                <p>Worked on developing RESTful APIs and integrating with frontend applications</p>
                <p>Participated in code reviews and contributed to team discussions on best practices</p>
            </div>
            <div className="about-content">
                <h3>Experience-2</h3>
                <p>Exaze IT Solution From Hyderabad</p>
                <h4>Position</h4>
                <p>Junior Java Developer</p>
                <p>Assisted in developing a microservices architecture for a large-scale application</p>    
                </div>
            <div className="about-content">
                <h3>Interests</h3>
                <p>In my free time, I enjoy contributing to open-source projects, learning new programming languages, and exploring new technologies.</p>
                <p>I also love reading tech blogs and participating in hackathons.</p>
            </div>
            <div className="about-content">
                <h3>Contact</h3>
                <p>If you would like to connect, feel free to reach out via the contact form or through my social media links.</p>
                <p>I’m always open to discussing new projects or opportunities!</p>
            </div>
        <div className="about-content">
          <h3>Fun Fact</h3>
          <p>I love solving puzzles and playing chess in my spare time!</p>
        </div>
        <div className="about-content">
          <h3>Quote</h3>
          <p>"The best way to predict the future is to invent it." - Alan Kay</p>
        </div>
        <div className="about-content">
          <h3>Connect with Me</h3>
          <p>You can find me on LinkedIn, GitHub, and Twitter. Let’s connect!</p>
        </div>
       
    </section>
  );
  
  export default About;