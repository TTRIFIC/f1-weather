import React from "react";
import Card from "../Card";

import "./CurrentWeather.css";

// Will need to pass in props from App.js

const CurrentWeather = ({ weatherData }) => {
  // convert temperature from Kelvin to Fahrenheit and Celsius
  const tempFahrenheit = ((weatherData.main.temp * 9) / 5 - 459.67).toFixed(1);
  const tempCelsius = (weatherData.main.temp - 273.15).toFixed(1);

  return (
    <Card>
      <div className="CurrentWeatherTemperature" />
      <div className="CurrentWeatherConditions" />
      <div className="CurrentWeatherIcon" />
    </Card>
  );
};

export default CurrentWeather;
