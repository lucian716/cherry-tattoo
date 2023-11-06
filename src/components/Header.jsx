import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaEnvelope, FaBars } from "react-icons/fa";
import cherryGif from "./cherry_rotating.gif";
import "../styles/header.css";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    document.querySelector(".header").classList.toggle("active");
  };

  return (
    <header className="header">
      {/* ... (rest of your code) ... */}
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
            <FaInstagram className="icon" />
            <Link to="/">Instagram</Link>
          </li>
          <li className="mobile-icons">
            <FaEnvelope className="icon" />
            <Link to="/">Email</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
