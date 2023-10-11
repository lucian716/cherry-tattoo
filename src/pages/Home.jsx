import React from "react";
import "../styles/video.css";
// import PhotoCarousel from "../pages/PhotoCarousel";

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

// const Home = () => {
//   const images = [
//     "/images/cherry_neon.png",
//     "/images/cherry_panther.png",
//     "/images/cherry_tattoo.png",
//   ];

//   return (
//     <div>
//       <PhotoCarousel images={images} />
//       <div className="video-container">
//         <video autoPlay loop muted>
//           <source src="/images/cherry-mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default Home;