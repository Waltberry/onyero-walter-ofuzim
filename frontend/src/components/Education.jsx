import React from 'react';
import { portfolioData } from '../data/mock';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">ACADEMIC BACKGROUND</p>
          <h2 className="heading-lg section-title">Education</h2>
        </div>

        <div className="grid-2">
          {education.map((edu) => (
            <div key={edu.id} className="card">
              <p className="label card-label">{edu.dates}</p>
              <h3 className="heading-sm card-title">{edu.degree}</h3>
              <p className="body-text" style={{ marginBottom: '8px', color: '#3A3A3A' }}>
                {edu.school}
              </p>
              {edu.gpa && (
                <p className="mono-text" style={{ marginBottom: '12px' }}>
                  GPA: {edu.gpa}
                </p>
              )}
              {edu.status && (
                <p className="mono-text" style={{ marginBottom: '12px', color: '#5A5A5A' }}>
                  {edu.status}
                </p>
              )}
              {edu.focus && edu.focus.length > 0 && (
                <div className="tech-stack">
                  {edu.focus.map((topic, idx) => (
                    <span key={idx} className="tech-tag">{topic}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
