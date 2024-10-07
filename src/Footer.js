import React from 'react';
import logos from './logos.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
        <img src={logos}  />
          <p className="footer-description">
            PyHack provides a wide range of resources and hands-on experience to help you master Python-based game development.
            Explore new techniques, share your creations, and collaborate with fellow developers. Whether you're looking to build
             indie games or start a career in the gaming industry, PyHack is the place to begin.
          </p>
        </div>
        <div className="footer-links-section">
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a>Brand</a></li>
              <li><a>FAQ</a></li>
              <li><a>Help & Support</a></li>
              <li><a>Governance</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Developers</h4>
            <ul>
              <li><a>Technical Paper</a></li>
              <li><a>Security</a></li>
              <li><a>Game Design</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a>Privacy Policy</a></li>
              <li><a>Terms of Use</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-social-icons">
        <a><i className="fab fa-instagram"></i></a>
        <a><i className="fab fa-twitter"></i></a>
        <a><i className="fas fa-gamepad"></i></a>
        <a><i className="fab fa-github"></i></a>
      </div>
      <div className="footer-color-bar"></div>
    </footer>
  );
}

export default Footer;
