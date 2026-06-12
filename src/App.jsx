import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "./utils/OpenWeatherAPI";
import getNextRace from "./utils/getNextRace";
import Container from "./components/Container";

import "./App.css";

function App() {
  const [race, setRace] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  // Select the next race from the local schedule on mount
  useEffect(() => {
    setRace(getNextRace());
  }, []);

  // Get current and forecasted weather data for the selected race location
  useEffect(() => {
    if (!race) return;

    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${race.latitude}&lon=${race.longitude}&appid=${API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [race]);

  if (!race) {
    return <div>F1 Schedule Loading...</div>;
  }
  if (!weatherData) {
    return <div>Weather Loading...</div>;
  }

  return (
    <Container
      race={race}
      city={race.city}
      location={race.country}
      weatherData={weatherData}
    ></Container>
  );
}

export default App;
