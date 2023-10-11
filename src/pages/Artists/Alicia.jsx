import React from "react";
import "../../styles/artists.css";

const Alicia = () => {
  const images = [
    "caroline1.png",
    "caroline2.png",
    "caroline3.png",
    "caroline4.png",
    "caroline5.png",
    "caroline6.png",
    "caroline7.png",
    "caroline8.png",
    "caroline9.png",
    "caroline10.png",
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
