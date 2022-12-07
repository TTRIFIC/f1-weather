import React, { useState, useEffect } from "react";
import axios from "axios";
//import getF1Schedule from "./Formula1Schedule";

//import "./weather.css";
import "./newWeather.css";

const API_KEY = "0e794f9efeda7de9b2d8bc440b1e4ed0";

const F1_SCHEDULE = [
  { location: "BAHRAIN", city: "Dar Kulayb", date: "2023-03-05" },
  { location: "SAUDI ARABIA", city: "Jeddah", date: "2023-03-19" },
  { location: "AUSTRALIA", city: "Melbourne", date: "2023-04-02" },
  // ...
];

const getNextRace = () => {
  const now = new Date();

  // find the next race in the schedule
  const nextRace = F1_SCHEDULE.find((race) => new Date(race.date) > now);

  // return the location and city of the next race
  return { location: nextRace.location, city: nextRace.city };
};

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const { location, city } = getNextRace();
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${location}&appid=${API_KEY}`;

    axios
      .get(weatherUrl)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!weather) {
    return <div>Loading weather data...</div>;
  }

  // convert temperature from Kelvin to Fahrenheit and Celsius
  const tempFahrenheit = ((weather.main.temp * 9) / 5 - 459.67).toFixed(1);
  const tempCelsius = (weather.main.temp - 273.15).toFixed(1);

  return (
    <div className="weather-card">
      <h1>{getNextRace().location}</h1>
      <div className="current-weather">
        <p>
          {tempFahrenheit}°F / {tempCelsius}°C
        </p>
        <p>{weather.weather[0].main}</p>
      </div>
    </div>
  );
};

export default Weather;
