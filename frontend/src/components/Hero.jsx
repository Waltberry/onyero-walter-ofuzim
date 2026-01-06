// frontend/src/components/Hero.jsx

import React from 'react';
import { portfolioData } from '../data/mock';
import { ExternalLink, Download } from 'lucide-react';

const Hero = () => {
  const { profile } = portfolioData;

  const handleContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Mock download - will be replaced with backend implementation
    alert('CV download will be implemented with backend');
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="label" style={{ marginBottom: '16px' }}>ENGINEER • AVAILABLE {profile.availability.toUpperCase()}</p>
            <h1 className="heading-xl">{profile.fullName}</h1>
            <p className="hero-tagline">{profile.title}</p>
            <p className="hero-subtitle">{profile.tagline}</p>
            
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={handleContact}>
                <ExternalLink size={14} style={{ marginRight: '8px' }} />
                Get in Touch
              </button>
              {/* <button className="btn" onClick={handleDownloadCV}>
                <Download size={14} style={{ marginRight: '8px' }} />
                Download CV
              </button> */}
            </div>
          </div>

          <div className="hero-photo">
            <img src={profile.photo} alt={profile.fullName} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
