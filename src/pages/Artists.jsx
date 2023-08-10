import React from "react";
import { Link } from "react-router-dom";
import "../styles/artists.css"; 

const Artists = () => {
  const artists = [
    {
      name: "Erica",
      image: "/images_artists/erica.png",
    },
    {
      name: "Kaitlyn",
      image: "/images_artists/kaitlyn.png",
    },
    {
      name: "Caroline",
      image: "/images_artists/caroline.png",
    },
  ];

  return (
    <div className="artists">
      <div className="artist-grid">
        {artists.map((artist) => (
          <div className="artist-item" key={artist.name}>
            <Link to={`/artists/${artist.name}`}>
              <h3>{artist.name}</h3>
              <img src={artist.image} alt={artist.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
