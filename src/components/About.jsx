// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="profile-img">SD</div>
          </div>
          <div className="about-text">
            <p>
              I am an MTech CSE student with a deep passion for generative AI
              and machine learning. With a strong foundation in Python and
              statistics, I focus on creating intelligent solutions that solve
              real-world problems.
            </p>
            <p>
              I worked as an AI Engineer at Fixity LearningPad, where I develop
              and optimize AI-based student answer evaluation systems using
              Claude API, OpenAI models, and RAG techniques.
            </p>
            <p>
              My journey includes diverse experience from SAP ABAP development
              at Accenture. I'm particularly interested in cost-effective AI
              solutions that can make a meaningful impact in education and
              beyond.
            </p>
            <div className="contact-info">
              <a href="mailto:swarnadharshinis@gmail.com">
                📧 swarnadharshinis@gmail.com
              </a>
              <a href="tel:+917619104769">📱 +91 76191 04769</a>
              <a
                href="https://www.linkedin.com/in/swarnadharshini"
                target="_blank"
                rel="noreferrer"
              >
                🔗 LinkedIn Profile
              </a>
              <span>📍 Coimbatore, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
