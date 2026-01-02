import React, { useState } from 'react';
import { portfolioData } from '../data/mock';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">CONTINUOUS LEARNING</p>
          <h2 className="heading-lg section-title">Certifications</h2>
        </div>

        <div>
          {Object.entries(certifications).map(([category, certList], idx) => {
            const isExpanded = expandedCategories[category] !== false;
            const displayCount = isExpanded ? certList.length : 3;
            const hasMore = certList.length > 3;

            return (
              <div key={idx} className="skills-category">
                <h3 className="heading-sm skills-category-title">{category}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {certList.slice(0, displayCount).map((cert, certIdx) => (
                    <li key={certIdx} className="body-text" style={{ paddingLeft: '16px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#5A5A5A' }}>▸</span>
                      {cert}
                    </li>
                  ))}
                </ul>
                {hasMore && (
                  <button
                    onClick={() => toggleCategory(category)}
                    className="btn"
                    style={{ 
                      marginTop: '16px', 
                      padding: '8px 16px', 
                      minHeight: 'auto',
                      fontSize: '11px'
                    }}
                  >
                    {isExpanded ? 'Show Less' : `Show ${certList.length - 3} More`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
