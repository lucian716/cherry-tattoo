import React from "react";
import "../../styles/artists.css";

const Caroline = () => {
  const images = [
    "Caroline.jpg",
    "caroline1.jpg",
    "caroline2.jpg",
    "caroline3.jpg",
    "caroline4.jpg",
    "caroline5.jpg",
    "caroline6.jpg",
    "caroline7.jpg",
    "caroline8.jpg",
    "caroline9.jpg",
    "caroline10.jpg",
    "caroline11.jpg",
  ];

  return (
    <div className="artist-page">
      <h1>Caroline</h1>
      <h5>She/Her</h5>
      <div className="photo-grid">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img src={`/images/caroline/${image}`} alt={`${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caroline;
