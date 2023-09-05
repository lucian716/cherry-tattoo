import React from "react";
import "../../styles/artists.css";

const Rita = () => {
  const images = [
    "rita1.jpg",
    "rita2.jpg",
    "rita3.jpg",
    "rita4.jpg",
    "rita5.jpg",
    "rita6.jpg",
    "rita7.jpg",
    "rita8.jpg",
    "rita9.jpg",
    "rita10.jpg",
  ];

  return (
    <div className="artist-page">
      <h1>Rita</h1>
      <h5>She/Her</h5>
      <div className="photo-grid">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img src={`/images/rita/${image}`} alt={`${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rita;
