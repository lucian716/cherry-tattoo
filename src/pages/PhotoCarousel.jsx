import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/photo-carousel.css";
const PhotoCarousel = ({ images }) => {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: true,
    showStatus: false,
    showThumbs: false,
    showIndicators: false,
    interval: 5000,
    transitionTime: 2500,
  };

  return (
    <div className="photo-carousel-container">
      <Carousel {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
