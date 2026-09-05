function ServiceCard({ icon: Icon, title, children }) {
  return (
    <div className="service-card">
      {/* The service card is sharing one layout for every support item. */}
      <Icon className="service-icon" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default ServiceCard;
