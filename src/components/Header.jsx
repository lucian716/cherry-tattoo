import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaEnvelope, FaBars } from "react-icons/fa";
import cherryGif from "./cherry_rotating.gif";
import "../styles/header.css";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header className="header">
      {/* ... other header content ... */}
      <div
        className={`mobile-menu-icon ${mobileMenuVisible ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <FaBars />
      </div>
      <nav className={`nav-shift ${mobileMenuVisible ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header-icons">
        <a
          href="https://www.instagram.com/cherrytattoo.mtl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="mailto:example@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;