import React from "react";
import API_KEY from "../../utils/OpenWeatherAPI";

import "./Radar.css";

const Radar = () => {
  return (
    <div className="RadarCard">
      <div className="RadarTitle">RADAR</div>
      <img
        className="RadarMap"
        src={`https://tile.openweathermap.org/map/precipitation_new/1/1/1.png?appid=${API_KEY}`}
        alt="Radar"
      />
    </div>
  );
};

export default Radar;
