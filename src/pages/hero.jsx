import React, { useState, useEffect } from "react";
import "../css/hero.css";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Background Slideshow */}
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="hero-content">
        <h1 className="hero-title">Secure Your Digital Life</h1>
        <p className="hero-text">
          Protect your passwords, memories, and important files with
          military-grade encryption and seamless cloud storage.
        </p>
        <Link to="/signup">
          <button className="hero-cta">Get Started</button>
        </Link>
      </div>

      {/* Overlay */}
      <div className="overlay"></div>
    </div>
  );
};

export default Hero;
