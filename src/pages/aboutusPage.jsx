import React from "react";
import "../css/aboutusPage.css";
import Header from "./header";
import Footer from "./footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-us-page">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-content">
            <h1 className="about-title">About Data Secure</h1>
            <p>Your Trusted Partner in Digital Security</p>
          </div>
          <div className="hero-svg">
            <svg viewBox="0 0 500 500">
              {/* Shield Graphic */}
              <path
                d="M250 50L50 150v150c0 100 200 200 200 200s200-100 200-200V150L250 50z"
                fill="#2DD4BF"
              />
              {/* Lock Graphic */}
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
        </div>

        {/* About Content */}
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At Data Secure, we believe in creating a safer digital world for
            everyone. Founded in 2023, our mission is to provide cutting-edge
            security solutions that protect your most valuable digital assets.
            With the increasing threats in the digital space, we've made it our
            responsibility to develop innovative tools that safeguard your
            passwords, images, and audio files with military-grade encryption.
          </p>
          <p>
            Our team of cybersecurity experts has spent years developing a
            robust platform that combines advanced technology with user-friendly
            features. We understand that security shouldn't come at the cost of
            convenience, which is why we've designed our services to be both
            powerful and easy to use.
          </p>
          <p>
            What sets us apart is our commitment to transparency and trust. We
            use a zero-knowledge protocol, meaning even we can't access your
            data. Your privacy is our top priority, and we're constantly
            innovating to stay ahead of emerging threats. Whether you're an
            individual or a business, Data Secure provides tailored solutions to
            meet your unique security needs.
          </p>
          <p>
            Join over 1 million users who trust Data Secure to protect their
            digital lives. Together, we're building a safer digital future.
          </p>
        </div>

        {/* Verified Partnerships */}
        <div className="partnerships">
          <h2>Verified Partnerships</h2>
          <div className="partners-grid">
            <div className="partner-card">
              <img src="https://via.placeholder.com/150" alt="Partner 1" />
              <p>CyberShield Inc.</p>
            </div>
            <div className="partner-card">
              <img src="https://via.placeholder.com/150" alt="Partner 2" />
              <p>SecureTech Solutions</p>
            </div>
            <div className="partner-card">
              <img src="https://via.placeholder.com/150" alt="Partner 3" />
              <p>DataGuard Alliance</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
