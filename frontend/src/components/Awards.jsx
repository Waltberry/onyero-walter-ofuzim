// frontend/src/components/Awards.jsx

import React from "react";
import { portfolioData } from "../data/mock";

const Awards = () => {
  const { awards = [] } = portfolioData;

  if (!awards.length) return null;

  return (
    <section id="awards" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">RECOGNITION</p>
          <h2 className="heading-lg section-title">Awards & Scholarships</h2>
        </div>

        <div className="grid-2">
          {awards.map((award) => (
            <div key={award.id} className="card">
              <p className="label card-label">{award.date}</p>
              <h3 className="heading-sm card-title">{award.title}</h3>
              {award.issuer && (
                <p className="body-text" style={{ marginBottom: "10px", color: "#3A3A3A" }}>
                  {award.issuer}
                </p>
              )}
              {award.details && (
                <p className="body-text" style={{ color: "#5A5A5A", lineHeight: "1.7" }}>
                  {award.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
