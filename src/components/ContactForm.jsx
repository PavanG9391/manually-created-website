import { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-form">
      {/* The form is keeping labels, fields, and feedback in one card. */}
      <h2>Send a Message</h2>

      {/* The browser validation is staying active for required fields. */}
      <form onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="full-name">
          Full Name
        </label>
        <input
          id="full-name"
          name="fullName"
          type="text"
          placeholder="Full Name"
          autoComplete="name"
          required
        />

        <label className="sr-only" htmlFor="email-address">
          Email Address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          required
        />

        <label className="sr-only" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          required
        />

        <label className="sr-only" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>

      {/* The success note is appearing after a submit action. */}
      {submitted && (
        <p className="form-success" role="status" aria-live="polite">
          Thanks! Your message has been sent.
        </p>
      )}
    </div>
  );
}

export default ContactForm;
