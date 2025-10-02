// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skillsData = {
  'Programming Languages': ['SQL', 'Python', 'Java'],
  'Data Analytic Tools': ['Microsoft Excel', 'Google Sheets', 'Google BigQuery', 'Visual Studio Code'],
  'Data Visualization Tools': ['Power BI', 'Tableau', 'Streamlit', 'Matplotlib', 'Seaborn'],
};

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-card">
            <h3 className="skills-category-title">{category}</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skills-list-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;