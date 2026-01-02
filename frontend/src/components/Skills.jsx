import React from 'react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">TECHNICAL EXPERTISE</p>
          <h2 className="heading-lg section-title">Skills</h2>
        </div>

        <div>
          {Object.entries(skills).map(([category, skillList], idx) => (
            <div key={idx} className="skills-category">
              <h3 className="heading-sm skills-category-title">{category}</h3>
              <div className="skills-list">
                {skillList.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
