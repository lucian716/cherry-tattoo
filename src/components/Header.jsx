import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import cherryGif from "./cherry_rotating.gif";
import "../styles/header.css";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={cherryGif} alt="Cherry Logo" className="logo-image" />
        </Link>
      </div>
      <button
        className={`burger-button ${mobileMenuVisible ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div />
        <div />
        <div />
      </button>
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
      <div className="icon-container">
        <ul>
          <li className="mobile-icons">
            <a
              href="https://www.instagram.com/cherrytattoo.mtl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
          </li>
          <li className="mobile-icons">
            <a
              href="mailto:cherrytattoomtl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
