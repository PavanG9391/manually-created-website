import "../styles/FAQ.css";
import FAQItem from "../components/FAQItem";

function FAQ() {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Browse our course catalogue, select your preferred course, and click the 'Enrol Now' button to begin the registration process.",
    },
    {
      question: "Are the courses completely online?",
      answer:
        "Yes. All courses are delivered online and can be accessed from desktop, tablet, or mobile devices.",
    },
    {
      question: "Do I receive a certificate after completing a course?",
      answer:
        "Yes. Students receive a certificate of completion after successfully finishing all required assessments.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely. Most courses provide flexible learning schedules, allowing you to study whenever it is convenient.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major credit/debit cards and secure online payment methods for course enrollment.",
    },
    {
      question: "How can I contact student support?",
      answer:
        "You can reach our support team through the Contact page or by emailing support@scholarsphere.com.",
    },
  ];

  return (
    <div className="faq-page">
      {/* The FAQ page is arranging answers into reusable cards. */}
      <section className="faq-header">
        <h1>Frequently Asked Questions</h1>

        <p>
          Find answers to the most commonly asked questions about our courses,
          enrollment process, certificates, and student services.
        </p>
      </section>

      <section className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </section>
    </div>
  );
}

export default FAQ;
