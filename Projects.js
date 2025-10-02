// src/components/Projects.js
import React from 'react';
import './Projects.css';
import projects from "../data/projects.json";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tech-stack">{project.tech}</p>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Live</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;