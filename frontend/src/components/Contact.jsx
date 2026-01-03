import React from "react";
import { portfolioData } from "../data/mock";
import { Github, Linkedin, FileText, Download } from "lucide-react";
import ContactForm from "./ContactForm.jsx";
import { API_BASE } from "../lib/config";

/**
 * Contact section:
 * - Left: your static info from mock.js + Quick Actions
 * - Right: ContactForm that POSTs to /api/contact
 * - "Download CV" now calls your FastAPI route (/api/cv/download)
 */
export default function Contact() {
  const { profile } = portfolioData;

  const handleDownloadCV = () => {
    window.location.href = `${API_BASE}/cv/download`;
  };

  return (
    <section id="contact" className="section">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "start",
          textAlign: "left",
        }}
      >
        {/* LEFT: static details */}
        <div>
          <div className="section-header" style={{ marginBottom: "1rem" }}>
            <p className="label section-label">GET IN TOUCH</p>
            <h2 className="heading-lg section-title">Contact</h2>
          </div>

          <div className="contact-info" style={{ display: "grid", gap: "1rem" }}>
            <div className="contact-item">
              <p className="contact-item-label">Email</p>
              <p className="contact-item-value">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            </div>

            <div className="contact-item">
              <p className="contact-item-label">Phone</p>
              <p className="contact-item-value">
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
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

          {/* Quick Actions */}
          <h3 className="heading-sm" style={{ margin: "24px 0 12px" }}>
            Quick Actions
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <button className="btn btn-primary" onClick={handleDownloadCV}>
              <Download size={14} style={{ marginRight: 8 }} />
              Download Full CV
            </button>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Github size={14} style={{ marginRight: 8 }} />
              View GitHub
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Linkedin size={14} style={{ marginRight: 8 }} />
              Connect on LinkedIn
            </a>

            <a
              href={profile.links.researchgate}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FileText size={14} style={{ marginRight: 8 }} />
              ResearchGate Profile
            </a>
          </div>
        </div>

        {/* RIGHT: form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
