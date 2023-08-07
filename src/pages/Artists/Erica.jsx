import React from "react";
import "../../styles/artists.css";

const Erica = () => {
  const images = [
    "chain_dice.png",
    "girl_reaper.png",
    "snake_black-grey.png",
    "snake_colour.png",
  ];

  return (
    <div className="artist-page">
      <h1>Erica Cyr</h1>
      <div className="photo-grid">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img src={`/images_artists/${image}`} alt={`${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Erica;
