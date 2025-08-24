// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p>
              Also a movie buff 🍿 – check out what I'm watching on{" "}
              <a
                href="https://letterboxd.com/SwarnaDS/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00d4aa", fontWeight: "bold" }}
              >
                Letterboxd
              </a>
              !
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Swarna Dharshini S. Thanks for visiting!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
