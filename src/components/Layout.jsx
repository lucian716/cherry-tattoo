import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/App.css";

const Layout = ({ title, description, children }) => {
  return (
    <div className="container">
      {" "}
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
