import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoss.png";
import "../css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Services", link: "/services" },
    { id: 3, text: "About", link: "/about" },
    { id: 4, text: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src={logo} width="75" height="auto" alt="logo" />
            <span className="brand">DATA SECURE</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link to={item.link} className="nav-link">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </button>

        {/* Mobile Navigation Dropdown */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <Link to={item.link} className="mobile-nav-link">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
