import React from "react";
import Logo from "./Logo";
import LocationInfo from "./location/LocationInfo";
import Timer from "./Timer";
import CurrentWeather from "./weather/CurrentWeather";
import HourlyWeather from "./weather/HourlyWeather";
import ForecastContainer from "./weather/ForecastContainer";
import Radar from "./weather/Radar";

import "./Container.css";

const Container = ({ city, location, weatherData, scheduleData }) => {
  return (
    <div className="container">
      <Logo />
      <LocationInfo city={city} location={location} />
      <Timer scheduleData={scheduleData} />
      <CurrentWeather weatherData={weatherData} />
      <HourlyWeather />
      <ForecastContainer />
      <Radar />
    </div>
  );
};

export default Container;
