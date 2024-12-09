import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About Section */}

        {/* Social Media Links */}
        <div className="footer-section social">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/mfakharrizwan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:mfakhar910@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://linkedin.com/in/muhammad-fakhar-rizwan-65548b258"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://bento.me/muhammadfakharrizwan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bento.me"
            >
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 <a
              href="https://linktr.ee/syedfakhar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <i className="fas fa-envelope"> Syed Muhammad Fakhar Rizwan.</i>
            </a> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
