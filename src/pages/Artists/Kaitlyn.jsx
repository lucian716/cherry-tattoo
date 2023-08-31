import React from "react";
import "../../styles/artists.css";

const Kaitlyn = () => {
  const images = [
    "chain_dice.png",
    "girl_reaper.png",
    "snake_black-grey.png",
    "snake_colour.png",
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
