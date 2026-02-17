// frontend/src/App.jsx

import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Awards from "./components/Awards.jsx"; 
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";
import OpenSource from "./components/OpenSource.jsx";
import JobSimulations from "./components/JobSimulations.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Awards />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Publications />
        <OpenSource />
        <JobSimulations />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
