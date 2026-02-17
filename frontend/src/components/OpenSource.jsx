import React from "react";
import { portfolioData } from "../data/mock";
import { ExternalLink } from "lucide-react";

const OpenSource = () => {
  const { openSource } = portfolioData;

  return (
    <section id="open-source" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">COMMUNITY</p>
          <h2 className="heading-lg section-title">Open Source</h2>
        </div>

        <div className="grid-2">
          {(openSource || []).map((o) => (
            <div key={o.id} className="card">
              <p className="label card-label">{o.dates}</p>
              <h3 className="heading-sm card-title">
                {o.org} — {o.role}
              </h3>
              <p className="body-text card-text">{o.summary}</p>

              {o.links?.home && (
                <a
                  href={o.links.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ padding: "8px 16px", minHeight: "auto", fontSize: "11px" }}
                >
                  <ExternalLink size={12} style={{ marginRight: "6px" }} />
                  Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
