import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import cherryGif from "./cherry_rotating.gif";
import "../styles/burger.css"; 
import "../styles/menu.css"; 


const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header className="header">
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
            <Link to="/instagram"></Link>
          </li>
          <li className="mobile-icons">
            <FaEnvelope className="icon" />
            <Link to="/email"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
