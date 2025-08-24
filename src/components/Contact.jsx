// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "2rem",
              color: "#666",
            }}
          >
            I'm always interested in discussing new opportunities,
            collaborations, or just connecting with fellow AI enthusiasts.
            Feel free to reach out!
          </p>
          <div className="cta-buttons">
            <a
              href="mailto:swarnadharshinis@gmail.com"
              className="btn btn-primary"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/swarnadharshini"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
