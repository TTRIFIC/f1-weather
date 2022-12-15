import React from "react";

import "./LocationInfo.css";

// Remember to pass in location as props

const LocationInfo = ({ city, location }) => {
  return (
    <div className="location-info">
      <div className="city">{city}</div>
      <div className="location">{location}</div>
    </div>
  );
};

export default LocationInfo;
