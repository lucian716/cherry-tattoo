import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Import the icons

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header-icons">
        {" "}
        <a
          href="https://www.instagram.com/" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="mailto:example@example.com" // Replace with your email address
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
