import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Cherry Tattoo</h3>
      <p>
        5555 Av. de Gaspe
        <br />
        suite 214
        <br />
        Montreal, QC H2T 2A3
        <br style={{ marginBottom: ".5rem" }} />
        cherrytattoomtl@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
