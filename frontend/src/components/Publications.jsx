import React from "react";
import { portfolioData } from "../data/mock";
import { FileText } from "lucide-react";

const Publications = () => {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">RESEARCH</p>
          <h2 className="heading-lg section-title">Publications</h2>
        </div>

        <div className="grid-2">
          {(publications || []).map((p) => (
            <div key={p.id} className="card">
              <p className="label card-label">
                {p.year} • {p.venue}
              </p>
              <h3 className="heading-sm card-title">{p.title}</h3>
              <p className="body-text" style={{ marginBottom: "12px", color: "#3A3A3A" }}>
                {p.authors}
              </p>

              {p.links?.paper && (
                <a
                  href={p.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ padding: "8px 16px", minHeight: "auto", fontSize: "11px" }}
                >
                  <FileText size={12} style={{ marginRight: "6px" }} />
                  Read
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
