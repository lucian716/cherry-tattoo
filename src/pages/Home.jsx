import React from "react";
import PhotoCarousel from "../pages/PhotoCarousel";

const Home = () => {
  const images = [
    "/images/cherry_neon.png",
    "/images/cherry_panther.png",
    "/images/cherry_tattoo.png",
  ];

  return (
    <div>
      <PhotoCarousel images={images} />
    </div>
  );
};

export default Home;
