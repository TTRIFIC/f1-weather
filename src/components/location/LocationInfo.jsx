import React from "react";

import "./LocationInfo.css";

// Remember to pass in location as props
// Location = Country

const LocationInfo = ({ city, location }) => {
  return (
    <div className="location-info">
      <div className="location">
        {city}, {location}
      </div>
    </div>
  );
};

export default LocationInfo;
