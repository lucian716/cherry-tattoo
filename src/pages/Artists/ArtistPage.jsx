import React from "react";
import { useParams } from "react-router-dom";

const ArtistPage = () => {
  const { artistName } = useParams();

  return (
    <div>
      {/* Render content for the specific artist */}
      <h1>Artist {artistName} Page</h1>
      {/* Render artist's images, description, etc. */}
    </div>
  );
};

export default ArtistPage;
