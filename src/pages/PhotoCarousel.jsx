import React from "react";
import Slider from "react-slick";
import "../styles/photo-carousel.css";

const PhotoCarousel = ({ images }) => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="photo-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <div className="carousel-indicators">
      </div>
    </div>
  );
};

export default PhotoCarousel;
