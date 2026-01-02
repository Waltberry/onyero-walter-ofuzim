import React from 'react';
import { portfolioData } from '../data/mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">PROFESSIONAL BACKGROUND</p>
          <h2 className="heading-lg section-title">Experience</h2>
        </div>

        <div>
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3 className="heading-sm experience-title">{exp.title}</h3>
                <p className="experience-company">
                  {exp.company}{exp.department && ` • ${exp.department}`}
                </p>
                <div className="experience-meta">
                  <span className="label">{exp.dates}</span>
                  <span className="label">{exp.location}</span>
                </div>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="body-text">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
