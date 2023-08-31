import React from "react";
import "../../styles/artists.css";

const Kaitlyn = () => {
  const images = [
    "Kaitlyn.png",
    "kaitlyn1.jpg",
    "kaitlyn2.jpg",
    "kaitlyn3.jpg",
    "kaitlyn4.jpg",
    "kaitlyn5.jpg",
    "kaitlyn6.jpg",
    "kaitlyn7.jpg",
    "kaitlyn8.jpg",
    "kaitlyn9.jpg",
    "kaitlyn10.jpg",
  ];

  return (
    <div className="artist-page">
      <h1>Kaitlyn</h1>
      <div className="photo-grid">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img src={`/images/kaitlyn/${image}`} alt={`${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kaitlyn;
