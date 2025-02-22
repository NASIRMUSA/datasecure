import React from "react";
import "../css/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left SVG Box */}
        <div className="about-svg-box">
          <svg viewBox="0 0 500 500" className="about-svg">
            {/* Shield Base */}
            <path
              d="M250 50L50 150v150c0 100 200 200 200 200s200-100 200-200V150L250 50z"
              fill="#2DD4BF"
            />
            {/* Lock */}
            <path
              d="M200 250v-50a50 50 0 01100 0v50h50v100H150V250h50z"
              fill="#0F172A"
              transform="translate(50, 50)"
            />
            {/* Checkmark */}
            <path
              d="M220 320l-60-60 30-30 30 30 90-90 30 30-120 120z"
              fill="#00F0FF"
              transform="translate(50, 50)"
            />
          </svg>
        </div>

        {/* Right Content Box */}
        <div className="about-content-box">
          <h2 className="about-title-sec">About Our Secure Storage</h2>
          <p className="about-text">
            We provide safe and easy-to-use solutions for keeping your digital
            life organized and protected.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3 className="h3">Password Protection</h3>
              <p>Keep your passwords safe with military-grade encryption</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🖼️</div>
              <h3 className="h3">Image Storage</h3>
              <p>
                Store private photos securely in your personal digital vault
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎵</div>
              <h3 className="h3">Audio Safekeeping</h3>
              <p>Protect important voice notes and audio files with ease</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
