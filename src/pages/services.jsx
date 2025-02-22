import { Link } from "react-router-dom";
import React from "react";
import { FaKey, FaImage, FaMusic, FaShieldAlt } from "react-icons/fa";
import Footer from "./footer";
import Header from "./header";
import ServicesSection from "./ServicesSection";
import "../css/services.css";
const ServicesPage = () => {
  return (
    <>
      <Header />
      <div className="services-page">
        {/* Unique Feature Section */}
        <section className="unique-section">
          <div className="unique-content">
            <div className="text-box">
              <h2>Multi-Layered Protection System</h2>
              <p>
                Our proprietary security architecture combines military-grade
                encryption with biometric verification and decentralized
                storage. Unlike typical solutions, we use a zero-knowledge
                protocol ensuring even we can't access your data.
              </p>
              <div className="security-features">
                <div className="feature">
                  <FaShieldAlt className="feature-ico" />
                  <span>256-bit AES Encryption</span>
                </div>
                <div className="feature">
                  <FaShieldAlt className="feature-ico" />
                  <span>Blockchain-Verified Integrity</span>
                </div>
              </div>
            </div>

            <div className="svg-box">
              <svg viewBox="0 0 100 100" className="security-lock">
                {/* Lock Body */}
                <path
                  d="M50 15A15 15 0 0 0 35 30v10h30V30A15 15 0 0 0 50 15z"
                  fill="#2DD4BF"
                />
                {/* Lock Shield */}
                <path
                  d="M50 90c-10-5-25-15-25-30V40h50v20c0 15-15 25-25 30z"
                  fill="#0F172A"
                />
                {/* Security Waves */}
                <path
                  d="M30 50h40v10H30z"
                  fill="#00F0FF"
                  className="security-wave"
                />
                <path
                  d="M25 60h50v10H25z"
                  fill="#2DD4BF"
                  className="security-wave"
                />
              </svg>
            </div>
          </div>
        </section>
        <ServicesSection />
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
