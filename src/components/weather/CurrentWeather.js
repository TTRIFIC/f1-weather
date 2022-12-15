import React from "react";
import Card from "../Card";

import "./CurrentWeather.css";

// Will need to pass in props from App.js

const CurrentWeather = () => {
  return (
    <Card>
      <div className="CurrentWeatherTemperature" />
      <div className="CurrentWeatherConditions" />
      <div className="CurrentWeatherIcon" />
    </Card>
  );
};

export default CurrentWeather;
