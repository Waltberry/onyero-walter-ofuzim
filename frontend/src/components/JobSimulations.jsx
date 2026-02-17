import React, { useState } from "react";
import { portfolioData } from "../data/mock";

const JobSimulations = () => {
  const { jobSimulations } = portfolioData;
  const [expanded, setExpanded] = useState({});

  const toggle = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !(prev[category] ?? true) }));
  };

  return (
    <section id="job-simulations" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">PRACTICE</p>
          <h2 className="heading-lg section-title">Job Simulations</h2>
        </div>

        <div>
          {Object.entries(jobSimulations || {}).map(([category, items]) => {
            const isExpanded = expanded[category] ?? true;
            const displayCount = isExpanded ? items.length : 6;
            const hasMore = items.length > 6;

            return (
              <div key={category} className="skills-category">
                <h3 className="heading-sm skills-category-title">{category}</h3>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {items.slice(0, displayCount).map((txt, idx) => (
                    <li key={idx} className="body-text" style={{ paddingLeft: "16px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#5A5A5A" }}>▸</span>
                      {txt}
                    </li>
                  ))}
                </ul>

                {hasMore && (
                  <button
                    onClick={() => toggle(category)}
                    className="btn"
                    style={{ marginTop: "16px", padding: "8px 16px", minHeight: "auto", fontSize: "11px" }}
                  >
                    {isExpanded ? "Show Less" : `Show ${items.length - 6} More`}
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

export default JobSimulations;
