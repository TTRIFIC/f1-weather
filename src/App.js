import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "./utils/OpenWeatherAPI";
import Container from "./components/Container";

import "./App.css";

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [city, setCity] = useState("Chicago");
  const [location, setLocation] = useState("USA");
  const [scheduleData, setScheduleData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Get current F1 season schedule
    axios
      .get(`http://ergast.com/api/f1/current/next.json`)
      .then((response) => {
        setScheduleData(response.data);
        setCity(
          response.data.MRData.RaceTable.Races[0].Circuit.Location.locality
        );
        setLocation(
          response.data.MRData.RaceTable.Races[0].Circuit.Location.country
        );
        setLat(response.data.MRData.RaceTable.Races[0].Circuit.Location.lat);
        setLon(response.data.MRData.RaceTable.Races[0].Circuit.Location.long);
      })
      .catch((error) => {
        console.error(error);
      });

    // Get current and forecasted weather data for the selected city
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [lat, lon]);

  if (!scheduleData) {
    return <div>F1 Schedule Loading...</div>;
  }
  if (!weatherData) {
    return <div>Weather Loading...</div>;
  }

  return (
    <Container
      scheduleData={scheduleData}
      city={city}
      location={location}
      weatherData={weatherData}
    ></Container>
  );
}

export default App;
