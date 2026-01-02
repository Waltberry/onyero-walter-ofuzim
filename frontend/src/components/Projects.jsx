import React from 'react';
import { portfolioData } from '../data/mock';
import { ExternalLink, FileText } from 'lucide-react';

const Projects = () => {
  const { featuredProjects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">SELECTED WORK</p>
          <h2 className="heading-lg section-title">Featured Projects</h2>
        </div>

        <div className="grid-2">
          {featuredProjects.map((project) => (
            <div key={project.id} className="card">
              <h3 className="heading-sm card-title">{project.name}</h3>
              <p className="body-text card-text">{project.summary}</p>
              
              <div className="tech-stack">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {project.links.repo && (
                  <a 
                    href={project.links.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ padding: '8px 16px', minHeight: 'auto', fontSize: '11px' }}
                  >
                    <ExternalLink size={12} style={{ marginRight: '6px' }} />
                    View Code
                  </a>
                )}
                {project.links.api && (
                  <a 
                    href={project.links.api} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ padding: '8px 16px', minHeight: 'auto', fontSize: '11px' }}
                  >
                    <ExternalLink size={12} style={{ marginRight: '6px' }} />
                    API
                  </a>
                )}
                {project.links.paper && (
                  <a 
                    href={project.links.paper} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ padding: '8px 16px', minHeight: 'auto', fontSize: '11px' }}
                  >
                    <FileText size={12} style={{ marginRight: '6px' }} />
                    Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
