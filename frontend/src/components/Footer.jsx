import React from 'react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <p className="mono-text">
              © {currentYear} {profile.fullName}. All rights reserved.
            </p>
            <p className="label" style={{ marginTop: '8px' }}>
              Built with React • By Onyero Walter Ofuzim
            </p>
          </div>

          <div className="footer-links">
            <a 
              href={profile.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a 
              href={profile.links.researchgate} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              ResearchGate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
