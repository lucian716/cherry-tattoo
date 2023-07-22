import React, { useState, useEffect } from "react";

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

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="home-banner">
      <div className="image-carousel">
        <div className="arrow-button left" onClick={prevImage}>
          &lt;
        </div>
        <div
          className="image-slide"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />
        <div className="arrow-button right" onClick={nextImage}>
          &gt;
        </div>
      </div>
      <div className="home-content">{/* Add your content here */}</div>
    </section>
  );
};

export default Home;