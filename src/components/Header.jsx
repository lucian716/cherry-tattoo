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
        <img src={cherryGif} alt="Cherry Logo" className="logo-image" />
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
          <li className="mobile-icons">
            <a href="https://www.instagram.com/cherrytattoo.mtl/">
              <FaInstagram className="icon" />
            </a>
          </li>
          <li className="mobile-icons">
            <a href="mailto:cherrytattoomtl@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
