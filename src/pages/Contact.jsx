import "../styles/Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-page">
      {/* The contact page is keeping info and form side by side. */}

      <section className="contact-header">
        <h1>Contact Us</h1>

        <p>
          Have questions about our courses or student services? We'd love to
          hear from you. Send us a message or use the contact details below.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Get in Touch</h2>
          {/* The contact details are being shown with icon-led rows. */}

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Address</h4>
              <p>123 Education Street, London, UK</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+44 1234 567890</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>info@scholarsphere.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaClock className="icon" />
            <div>
              <h4>Working Hours</h4>
              <p>Monday - Friday : 9:00 AM - 5:00 PM</p>
            </div>
          </div>

        </div>

        <ContactForm />

      </section>

      {/* The map section is staying as the static location image. */}
      <section className="map-section">

        <h2>Our Location</h2>

        <img
          src={`${import.meta.env.BASE_URL}images/map-placeholder.png`}
          alt="Map showing the location of ScholarSphere"
        />

      </section>

    </div>
  );
}

export default Contact;
