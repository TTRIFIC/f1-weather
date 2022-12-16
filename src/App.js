import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "./utils/OpenWeatherAPI";
import Container from "./components/Container";

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

  return (
    <Container
      city={city}
      location={location}
      weatherData={weatherData}
    ></Container>
  );
}

export default App;
