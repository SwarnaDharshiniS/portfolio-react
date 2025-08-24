// src/components/Projects.jsx
import React from "react";

const Projects = () => {
    return (               
       <section id="projects" class="section">
          <div class="container">
            <h2 class="section-title">Projects & Publications</h2>
            
            <div class="projects-grid">
              {/* <!-- Project 1 --> */}
              <div class="project-card">
                <div class="project-card-content">
                  <h3>Deep Learning Based Alzheimer's Disease Detection</h3>
                  <p>Developed a cost-effective CNN architecture using DenseNet-169 and transfer learning for Alzheimer's Disease detection. The model achieved a mean accuracy of 88%.</p>
                  <div>
                    <span class="project-tag">Deep Learning</span>
                    <span class="project-tag">CNN</span>
                    <span class="project-tag">DenseNet-169</span>
                    <span class="project-tag">Transfer Learning</span>
                    <span class="project-tag">Scopus Indexed</span>
                  </div>
                  <p><a href="https://github.com/SwarnaDharshiniS/alzheimers_prediction" target="_blank">View on GitHub</a></p>
                </div>
              </div>
        
              {/* <!-- Project 2 --> */}
              <div class="project-card">
                <div class="project-card-content">
                  <h3>Book Recommendation System</h3>
                  <p>A content-based recommendation system that suggests books based on user preferences using similarity metrics like cosine similarity and TF-IDF vectorization. Built with Python and deployed on Streamlit.</p>
                  <div>
                    <span class="project-tag">NLP</span>
                    <span class="project-tag">Recommendation System</span>
                    <span class="project-tag">Python</span>
                    <span class="project-tag">Streamlit</span>
                    <span class="project-tag">Content-Based Filtering</span>
                  </div>
                  <p><a href="https://github.com/BeigeCat/CFG_Group_Project" target="_blank">View on GitHub</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Projects;       