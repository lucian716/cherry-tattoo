import React from "react";
import { Link } from "react-router-dom";
import "../styles/artists.css";

const Artists = () => {
  const artists = [
    {
      name: "Erica",
      image: "/images/erica/Erica.png",
    },
    {
      name: "Kaitlyn",
      image: "/images/kaitlyn/Kaitlyn.png",
    },
    {
      name: "Caroline",
      image: "/images/caroline/Caroline.jpg",
    },
    {
      name: "Alicia",
      image: "/images/alicia/alicia.png",
    },
    {
      name: "Rita",
      image: "/images/rita/Rita.png",
    },
  ];

  return (
    <div className="artists">
      <div className="artist-grid">
        {artists.map((artist) => (
          <div className="artist-item" key={artist.name}>
            <Link to={`/artists/${artist.name}`}>
              <div className="container">
                <img src={artist.image} alt={artist.name} className="image" />
                <div className="middle">
                  <div className="text">{artist.name}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
