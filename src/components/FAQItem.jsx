function FAQItem({ question, answer }) {
  return (
    <div className="faq-card">
      {/* The FAQ card is repeating the same pattern for each question. */}
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

export default FAQItem;
