import React, { useState } from "react";
import "../css/ContactPage.css";
import Header from "./Header";
import Footer from "./Footer";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Data Secure?",
      answer:
        "Data Secure is a platform that provides military-grade encryption for storing and protecting your passwords, images, and audio files. Our goal is to keep your digital life safe and organized.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Your data is protected with 256-bit AES encryption, the same standard used by governments and financial institutions. We also use a zero-knowledge protocol, meaning even we cannot access your data.",
    },
    {
      question: "Can I access my data offline?",
      answer:
        "Yes, you can access your encrypted data offline once it has been synced to your device. However, new changes will sync when you reconnect to the internet.",
    },
    {
      question: "What happens if I forget my password?",
      answer:
        "We cannot recover your password due to our zero-knowledge protocol. However, you can reset your account using your recovery key, which you are prompted to save during signup.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for all new users. You can explore all features before committing to a subscription.",
    },
  ];

  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-container">
          {/* FAQ Section with New Box */}
          <div className="faq-section">
            <div className="faq-content">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className={`faq-item ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <div
                      className="faq-question"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3>{item.question}</h3>
                      <span className="accordion-icon">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>
                    {activeIndex === index && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* New Box with SVG */}
            <div className="faq-svg-box">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.61 1.14-3.61 2.96h2c0-.55.45-1 1-1s1 .45 1 1c0 .55-.45 1-1 1h-.5v1.5h1V11c1.54 0 2.5-1.08 2.5-2.5 0-1.32-1.18-2.46-2.39-2.54z"
                  fill="#2DD4BF"
                />
              </svg>
            </div>
          </div>

          {/* Contact Form and Info Section */}
          <div className="contact-form-section">
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>

              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your message here..."
                  rows="5"
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                  </svg>
                </div>
                <p>support@datasecure.com</p>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <p>+234 (806) 0885330</p>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                  </svg>
                </div>
                <p>datasecure@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
