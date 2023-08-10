import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const apiKey = process.env.REACT_APP_API_KEY;

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 45.52809706761487, lng: -73.5975699380267 }}
    >
      <Marker position={{ lat: 45.52809706761487, lng: -73.5975699380267 }} />
    </GoogleMap>
  ))
);

const GoogleMaps = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default GoogleMaps;
