import React, { useMemo, useState } from "react";
import { portfolioData } from "../data/mock";
import { ExternalLink, FileText } from "lucide-react";

const Projects = () => {
  const { projects } = portfolioData;

  const categories = useMemo(() => Object.keys(projects || {}), [projects]);
  const [expanded, setExpanded] = useState({}); // category -> bool

  const toggle = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !(prev[category] ?? true) }));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label section-label">PORTFOLIO</p>
          <h2 className="heading-lg section-title">Projects</h2>
        </div>

        <div>
          {categories.map((category) => {
            const list = projects[category] || [];
            const isExpanded = expanded[category] ?? true;
            const displayCount = isExpanded ? list.length : 4;
            const hasMore = list.length > 4;

            return (
              <div key={category} className="skills-category">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <h3 className="heading-sm skills-category-title">{category}</h3>
                  <span className="label" style={{ opacity: 0.8 }}>
                    {list.length} project{list.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="grid-2">
                  {list.slice(0, displayCount).map((project) => (
                    <div key={project.id} className="card">
                      <h3 className="heading-sm card-title">{project.name}</h3>
                      <p className="body-text card-text">{project.summary}</p>

                      {project.stack?.length > 0 && (
                        <div className="tech-stack">
                          {project.stack.map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      <div
                        style={{
                          marginTop: "24px",
                          display: "flex",
                          gap: "12px",
                          flexWrap: "wrap",
                        }}
                      >
                        {project.links?.repo && (
                          <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ padding: "8px 16px", minHeight: "auto", fontSize: "11px" }}
                          >
                            <ExternalLink size={12} style={{ marginRight: "6px" }} />
                            Repo
                          </a>
                        )}
                        {project.links?.api && (
                          <a
                            href={project.links.api}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ padding: "8px 16px", minHeight: "auto", fontSize: "11px" }}
                          >
                            <ExternalLink size={12} style={{ marginRight: "6px" }} />
                            API
                          </a>
                        )}
                        {project.links?.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ padding: "8px 16px", minHeight: "auto", fontSize: "11px" }}
                          >
                            <ExternalLink size={12} style={{ marginRight: "6px" }} />
                            Demo
                          </a>
                        )}
                        {project.links?.paper && (
                          <a
                            href={project.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ padding: "8px 16px", minHeight: "auto", fontSize: "11px" }}
                          >
                            <FileText size={12} style={{ marginRight: "6px" }} />
                            Paper
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {hasMore && (
                  <button
                    onClick={() => toggle(category)}
                    className="btn"
                    style={{ marginTop: "16px", padding: "8px 16px", minHeight: "auto", fontSize: "11px" }}
                  >
                    {isExpanded ? "Show Less" : `Show ${list.length - 4} More`}
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

export default Projects;
