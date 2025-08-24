// src/components/Skills.jsx
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ background: "#2d3748" }}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">ABAP</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Machine Learning & AI</h3>
            <div className="skill-tags">
              <span className="skill-tag">LLM</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">Fine-Tuning</span>
              <span className="skill-tag">RAG</span>
              <span className="skill-tag">NLP</span>
              <span className="skill-tag">CNN</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Statistics & Mathematics</h3>
            <div className="skill-tags">
              <span className="skill-tag">Probability</span>
              <span className="skill-tag">Statistics</span>
              <span className="skill-tag">Linear Algebra</span>
              <span className="skill-tag">Calculus</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">SAP S/4HANA</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">Claude API</span>
              <span className="skill-tag">OpenAI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
