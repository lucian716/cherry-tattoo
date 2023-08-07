import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Artists from "./pages/Artists";
import ArtistPage from "./pages/Artists/ArtistPage";
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
        <Route path="/artists/:artistName" element={<ArtistPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
