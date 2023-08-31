import React from "react";
import "../../styles/artists.css";

const Alicia = () => {
  const images = [
    "chain_dice.png",
    "girl_reaper.png",
    "snake_black-grey.png",
    "snake_colour.png",
  ];

  return (
    <div className="artist-page">
      <h1>Alicia</h1>
      <h5>They/Them</h5>
      <div className="photo-grid">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img src={`/images/alicia/${image}`} alt={`${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alicia;
