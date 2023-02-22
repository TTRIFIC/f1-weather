import React, { useState, useEffect } from "react";
import ChatGPTWeather from "./components/ChatGPTWeatherApp";
import axios from "axios";
import API_KEY from "./utils/OpenWeatherAPI";

import "./App.css";

function App() {
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
  }, [city, location]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // convert temperature from Kelvin to Fahrenheit and Celsius
  const tempFahrenheit = ((weatherData.main.temp * 9) / 5 - 459.67).toFixed(1);
  const tempCelsius = (weatherData.main.temp - 273.15).toFixed(1);

  return (
    <ChatGPTWeather
      weatherData={weatherData}
      tempFahrenheit={tempFahrenheit}
      tempCelsius={tempCelsius}
      city={city}
      location={location}
    />
  );
}

export default App;
