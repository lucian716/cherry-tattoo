import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/app.css";
import "../styles/home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/cherry_neon.png",
    "/images/cherry_panther.png",
    "/images/tatouage_cerise.png",
  ];

  useEffect(() => {
    const changeBackgroundImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const timer = setInterval(changeBackgroundImage, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="home-banner">
      <Carousel
        activeIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="image-slide"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Home;
