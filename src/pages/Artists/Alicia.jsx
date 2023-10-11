import React from "react";
import "../../styles/artists.css";

const Alicia = () => {
  const images = [
    "alicia1.png",
    "alicia2.png",
    "alicia3.png",
    "alicia4.png",
    "alicia5.png",
    "alicia6.png",
    "alicia7.png",
    "alicia8.png",
    "alicia9.png",
    "alicia10.png",
  ];

  return (
    <div className="artist-page">
      <h1>Alicia</h1>
      <h5>They/Them</h5>
      <div className="photo-grid">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img
              src={`/images/alicia/${image}`}
              alt={`${index}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alicia;
