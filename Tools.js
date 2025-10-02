// src/components/Tools.js
import React from 'react';
import './Tools.css';

const toolsData = [
  'Power BI',
  'Tableau',
  'Streamlit',
  'Matplotlib',
  'Seaborn',
  'Excel Macros',
];

function Tools() {
  return (
    <section id="tools" className="section tools-section">
      <h2 className="section-title">Tools</h2>
      <div className="tools-grid">
        {toolsData.map((tool, index) => (
          <div key={index} className="tool-card">
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tools;