// src/components/Hero.j

import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text-content">
          <h1 className="hero-title">
            <span className="hero-highlight">NIKHIL RONAD</span>
          </h1>
          <span className="hero-label">DATA ANALYST</span>
          <p className="hero-tagline">
            I am an aspiring Data Analyst with hands-on experience in Python, SQL, Excel, and Power BI. I specialize in transforming raw data into actionable insights to support business decisions. Passionate about creating dashboards, predictive models, and visualization to tell data stories effectively.
          </p>
          <div className="contact-links">
            <a href="mailto:ronadnikhil@gmail.com" className="contact-link">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-ronad-685298200/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Nikkhiiilll"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-image-container">
           <img src="/images/profile.jpg" alt="Nikhil Ronad" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;