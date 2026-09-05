import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: "url('/images/hero-education.png')",
      }}
    >
      {/* The hero banner is holding the primary call to action. */}
      {/* The buttons are staying centered over the banner image. */}
      <div className="hero-buttons-overlay">
        <Link to="/courses" className="primary-btn">
          Explore Courses
        </Link>

        <Link to="/contact" className="secondary-btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Hero;
