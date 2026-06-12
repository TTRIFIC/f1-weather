import React from "react";
import Logo from "./Logo";
import LocationInfo from "./location/LocationInfo";
import Timer from "./Timer";
import CurrentWeather from "./weather/CurrentWeather";
import HourlyWeather from "./weather/HourlyWeather";
import ForecastContainer from "./weather/ForecastContainer";

import "./Container.css";

const Container = ({ city, location, weatherData, race }) => {
  const raceDate = race.date;
  const raceTime = race.time;

  return (
    <div className="container">
      <Logo />
      <LocationInfo city={city} location={location} />
      <Timer raceDate={raceDate} raceTime={raceTime} />
      <CurrentWeather weatherData={weatherData} />
      <HourlyWeather weatherData={weatherData} />
      <ForecastContainer weatherData={weatherData} race={race} />
    </div>
  );
};

export default Container;
