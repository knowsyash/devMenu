import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section company-info">
          <h2>Foodie's Hub</h2>
          <p>Delicious meals delivered to your doorstep. Fresh ingredients, amazing taste!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p><strong>📍 Address:</strong> 123 Food Street, New York, USA</p>
          <p><strong>📞 Phone:</strong> +1 234 567 890</p>
          <p><strong>✉ Email:</strong> support@foodieshub.com</p>
        </div>

 
        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <img src="/assets/facebook.svg" alt="Facebook" />
            <img src="/assets/instagram.svg" alt="Instagram" />
            <img src="/assets/twitter.svg" alt="Twitter" />
            <img src="/assets/youtube.svg" alt="YouTube" />
          </div>
        </div>
      </div>

      {/* Copyright & Policies */}
      <div className="footer-bottom">
        <p>© 2025 Foodie's Hub. All Rights Reserved.</p>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
