
import React from 'react';
import './Certifications.css';
import certifications from "../data/certifications.json";

function Certifications() {
    return (
        <section id="certifications" className="section certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <h3 className="certification-name">{cert.name}</h3>
                        <p className="certification-provider">{cert.issuer}</p>
                        <a href={cert.link} className="certification-link green" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default Certifications;
