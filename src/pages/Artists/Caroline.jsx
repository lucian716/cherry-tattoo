import React from "react";
import "../../styles/artists.css";

const Caroline = () => {
  const images = [
    "chain_dice.png",
    "girl_reaper.png",
    "snake_black-grey.png",
    "snake_colour.png",
  ];

  return (
    <div className="artist-page">
      <h1>Caroline</h1>
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

export default Caroline;
