import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Gourmet Haven</h3>
            <p>Experience the finest cuisine with our carefully crafted dishes, using only the freshest ingredients and innovative culinary techniques.</p>
          </div>

          <div className="footer-section">
            <h3>Opening Hours</h3>
            <ul className="hours-list">
              <li><span>Monday - Thursday:</span> 11am - 10pm</li>
              <li><span>Friday - Saturday:</span> 11am - 11pm</li>
              <li><span>Sunday:</span> 10am - 9pm</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li><FaMapMarkerAlt /> 123 Gourmet Avenue, Culinary District</li>
              <li><FaPhone /> (555) 123-4567</li>
              <li><FaEnvelope /> info@gourmethaven.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                <FaYelp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
          <p className="copyright">
            &copy; {currentYear} Gourmet Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 