import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAytTqWQyMHhrmJd7okvYEiiQ_KFTO3d9c", // Replace with your API key
    libraries: ["places"], // Include necessary libraries here
  });

  if (loadError) {
    return <div>Error loading the map: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Example coordinates for Dutton Financial Services and other locations
  const locations = [
    {
      lat: -37.8292,
      lng: 144.9931,
      name: "Dutton Financial Services - Richmond",
    },

    // Add more locations with correct coordinates here
  ];

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "500px" }} // Ensure enough height for visibility
      center={{ lat: -37.8292, lng: 144.9931 }} // Center the map at the first location
      zoom={12}>
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.name}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
