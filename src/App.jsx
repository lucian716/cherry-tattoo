import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import GoogleMaps from "./components/GoogleMaps";
import Artists from "./pages/Artists";
import Erica from "./pages/Artists/Erica";
import Kaitlyn from "./pages/Artists/Kaitlyn";
import Caroline from "./pages/Artists/Caroline";
import Alicia from "./pages/Artists/Alicia";
import Rita from "./pages/Artists/Rita";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/erica" element={<Erica />} />
        <Route path="/artists/kaitlyn" element={<Kaitlyn />} />
        <Route path="/artists/caroline" element={<Caroline />} />
        <Route path="/artists/alicia" element={<Alicia />} />
        <Route path="/artists/rita" element={<Rita />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
