import React from "react";
import "../../styles/artists.css";

const Erica = () => {
  const images = [
    "erica1.jpg",
    "erica2.jpg",
    "erica3.jpg",
    "erica4.jpg",
    "erica5.jpg",
    "erica6.jpg",
    "erica7.jpg",
    "erica8.jpg",
    "erica9.jpg",
    "erica10.jpg",
  ];

  return (
    <div className="artist-page">
      <h1>Erica Cyr</h1>
      <h5>She/Her</h5>
      <div className="photo-grid">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img
              src={`/images/erica/${image}`}
              alt={`${index}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Erica;
