import React from "react";
import "../styles/video.css";

const Home = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src="/images/cherry.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;