import React from 'react';
import { portfolioData } from '../data/mock';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Download } from 'lucide-react';

const Contact = () => {
  const { profile } = portfolioData;

  const handleDownloadCV = () => {
    // Mock download - will be replaced with backend implementation
    alert('CV download will be implemented with backend');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">GET IN TOUCH</p>
          <h2 className="heading-lg section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <p className="contact-item-label">Email</p>
              <p className="contact-item-value">
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </div>

            <div className="contact-item">
              <p className="contact-item-label">Phone</p>
              <p className="contact-item-value">
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  {profile.phone}
                </a>
              </p>
            </div>

            <div className="contact-item">
              <p className="contact-item-label">Location</p>
              <p className="contact-item-value">{profile.location}</p>
            </div>

            <div className="contact-item">
              <p className="contact-item-label">Availability</p>
              <p className="contact-item-value">{profile.availability}</p>
            </div>
          </div>

          <div>
            <h3 className="heading-sm" style={{ marginBottom: '24px' }}>Quick Actions</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <Download size={14} style={{ marginRight: '8px' }} />
                Download Full CV
              </button>

              <a 
                href={profile.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                <Github size={14} style={{ marginRight: '8px' }} />
                View GitHub
              </a>

              <a 
                href={profile.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                <Linkedin size={14} style={{ marginRight: '8px' }} />
                Connect on LinkedIn
              </a>

              <a 
                href={profile.links.researchgate} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                <FileText size={14} style={{ marginRight: '8px' }} />
                ResearchGate Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
