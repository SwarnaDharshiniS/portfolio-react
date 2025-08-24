// src/components/Certifications.jsx
import React from "react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section"
      style={{ background: "#2d3748" }}
    >
      <div className="container">
        <h2 className="section-title">Trainings & Certifications</h2>
        <div className="cert-grid">
          <div className="cert-item">
            <h3>Data Science Degree + Master's Bootcamp</h3>
            <p>Code First Girls</p>
          </div>
          <div className="cert-item">
            <h3>SAP ABAP S/4HANA (RICEF)</h3>
            <p>Accenture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
