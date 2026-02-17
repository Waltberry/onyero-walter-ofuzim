import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            W.OFUZIM
          </a>

          <nav>
            <ul className="nav-links">
              {[
                ["about", "About"],
                ["projects", "Projects"],
                ["skills", "Skills"],
                ["experience", "Experience"],
                ["education", "Education"],
                ["publications", "Publications"],
                ["open-source", "Open Source"],
                ["job-simulations", "Job Sims"],
                ["certifications", "Certifications"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
