import React from "react";
import "../css/ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Password Protection",
      description:
        "Secure credentials with end-to-end encryption and breach monitoring",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          <path d="M12 11h7v2h-7z" />
        </svg>
      ),
    },
    {
      title: "Image Vault",
      description:
        "Private photo storage with facial recognition access control",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      ),
    },
    {
      title: "Audio Safekeeping",
      description:
        "Encrypted voice memo storage with voiceprint authentication",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
