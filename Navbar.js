// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        <h1 className="navbar-title">Nikhil Ronad</h1>
        <ul className="navbar-links">
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#skills" className="navbar-link">Skills</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#certifications" className="navbar-link">Certifications</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;