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
      <div className="burger-menu" onClick={toggleMobileMenu}>
        <div className={`styled-burger ${mobileMenuVisible ? "open" : ""}`}>
          <div />
          <div />
          <div />
        </div>
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
              href="mailto:example@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
