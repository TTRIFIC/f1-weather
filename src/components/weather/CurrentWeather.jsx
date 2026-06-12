import React from "react";

import "./CurrentWeather.css";

const CurrentWeather = ({ weatherData }) => {
  // Convert temperature from Kelvin to Fahrenheit and Celsius
  const tempFahrenheit = ((weatherData.current.temp * 9) / 5 - 459.67).toFixed(
    0
  );
  const tempCelsius = (weatherData.current.temp - 273.15).toFixed(0);
  const currentTemp = `${tempFahrenheit}°F / ${tempCelsius}°C`;

  // Gets the conditions from Weather Data
  const currentConditions = weatherData.current.weather[0].main;

  return (
    <div className="CurrentWeatherCard">
      <div className="CurrentWeatherTitle">NOW</div>
      <div className="CurrentWeatherTemperature">{currentTemp}</div>
      <img
        className="CurrentWeatherIcon"
        src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`}
        alt={weatherData.current.weather[0].main}
      />
      <div className="CurrentWeatherConditions">{currentConditions}</div>
    </div>
  );
};

export default CurrentWeather;
