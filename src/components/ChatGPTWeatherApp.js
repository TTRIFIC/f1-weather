import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import API_KEY from "../utils/OpenWeatherAPI";

import "./ChatGPTWeatherCSS.css";

/*        <div className="weather-card-forecast">
{weatherData.forecast.map((forecast) => (
    <div className="weather-card-forecast-day" key={forecast.date}>
      <div className="weather-card-forecast-day-name">
        {moment(forecast.date).format("ddd")}
      </div>
      <img
        className="weather-card-forecast-day-icon"
        src={forecast.iconUrl}
        alt={forecast.conditions}
      />
      <div className="weather-card-forecast-day-temp">
        {forecast.temperature}
      </div>
    </div>
  ))}
</div>
<div className="weather-card-updated-at">
  Updated at {moment(weatherData.updatedAt).format("h:mm a")}
</div>
*/

const ChatGPTWeather = () => {
  const [city, setCity] = useState("New York");
  const [location, setLocation] = useState("USA");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Get current and forecasted weather data for the selected city
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${location}&appid=${API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // convert temperature from Kelvin to Fahrenheit and Celsius
  const tempFahrenheit = ((weatherData.main.temp * 9) / 5 - 459.67).toFixed(1);
  const tempCelsius = (weatherData.main.temp - 273.15).toFixed(1);

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="weather-card-area">
          <div className="weather-card-city">{city}</div>
          <div className="weather-card-location">{location}</div>
        </div>
        <div className="weather-card-current">
          <div className="weather-card-current-temp">
            {tempFahrenheit}°F / {tempCelsius}°C
          </div>
          <div className="weather-card-current-icon-and-conditions">
            <img
              className="weather-card-current-icon"
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt={weatherData.weather[0].main}
            />
            <div className="weather-card-current-conditions">
              {weatherData.weather[0].main}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTWeather;
