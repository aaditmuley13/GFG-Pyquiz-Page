import React from 'react';
import logos from './logos.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
        <img src={logos} alt="Placeholder Image" />
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
              <li><a href="#">Brand</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Governance</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Developers</h4>
            <ul>
              <li><a href="#">Technical Paper</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Game Design</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-social-icons">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fas fa-gamepad"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
      <div className="footer-color-bar"></div>
    </footer>
  );
}

export default Footer;
