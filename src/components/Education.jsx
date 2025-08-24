// src/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section id="education" className="section" style={{ background: "#2d3748" }}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <h3>MTech Computer Science & Engineering</h3>
            <div className="institution">Amrita Vishwa Vidyapeetham, Coimbatore</div>
            <div className="duration">2025 - 2027</div>
            <div className="grade">Currently Pursuing</div>
          </div>
          <div className="education-card">
            <h3>MSc Financial Engineering</h3>
            <div className="institution">WorldQuant University (Online)</div>
            <div className="duration">2025 - 2027</div>
            <div className="grade">Currently Pursuing</div>
          </div>
          <div className="education-card">
            <h3>B.E. Computer Science & Engineering</h3>
            <div className="institution">SCSVMV University, Kanchipuram</div>
            <div className="duration">2019 - 2023</div>
            <div className="grade">CGPA: 9.74/10</div>
          </div>
          <div className="education-card">
            <h3>Higher Secondary Certificate (HSC)</h3>
            <div className="institution">DBTR National Higher Secondary School, Mayiladuthurai</div>
            <div className="duration">2017 - 2019</div>
            <div className="grade">83.5%</div>
          </div>
          <div className="education-card">
            <h3>Secondary School Leaving Certificate (SSLC)</h3>
            <div className="institution">DBTR National Higher Secondary School, Mayiladuthurai</div>
            <div className="duration">2016 - 2017</div>
            <div className="grade">95.6%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
