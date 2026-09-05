import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* The brand note is sitting in the first footer block. */}
        <div className="footer-section">
          <h2>ScholarSphere</h2>
          <p>
            Empowering learners through quality education and innovative
            online learning experiences.
          </p>
        </div>

        {/* The quick links are repeating the main site routes. */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/student-services">Student Services</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* The contact details are staying in a short stacked list. */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> 123 Education Street, London, UK
          </p>

          <p>
            <FaPhoneAlt /> +44 1234 567890
          </p>

          <p>
            <FaEnvelope /> info@scholarsphere.com
          </p>
        </div>

        {/* The social links are pointing to valid external destinations. */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="https://github.com/" aria-label="GitHub">
              <FaFacebookF />
            </a>

            <a href="https://linkedin.com/" aria-label="LinkedIn">
              <FaTwitter />
            </a>

            <a href="https://twitter.com/" aria-label="Twitter">
              <FaInstagram />
            </a>

            <a href="https://github.com/" aria-label="GitHub profile">
              <FaLinkedinIn />
            </a>

          </div>
        </div>

      </div>

      {/* The copyright line is staying centered below the footer grid. */}
      <div className="footer-bottom">
        <p>
          &copy; 2026 ScholarSphere. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
