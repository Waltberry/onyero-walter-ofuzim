import React from 'react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { profile } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">OVERVIEW</p>
          <h2 className="heading-lg section-title">About</h2>
        </div>
        
        <div style={{ maxWidth: '800px' }}>
          <p className="body-text" style={{ fontSize: '18px', lineHeight: '1.8' }}>
            {profile.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
