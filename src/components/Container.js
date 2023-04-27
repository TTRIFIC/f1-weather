import React from "react";
import Logo from "./Logo";
import LocationInfo from "./location/LocationInfo";
import Timer from "./Timer";
import CurrentWeather from "./weather/CurrentWeather";
import HourlyWeather from "./weather/HourlyWeather";
import ForecastContainer from "./weather/ForecastContainer";

import "./Container.css";

const Container = ({ city, location, weatherData, scheduleData }) => {
  const raceDate = scheduleData.MRData.RaceTable.Races[0].date;
  const raceTime = scheduleData.MRData.RaceTable.Races[0].time;

  return (
    <div className="container">
      <Logo />
      <LocationInfo city={city} location={location} />
      <Timer raceDate={raceDate} raceTime={raceTime} />
      <CurrentWeather weatherData={weatherData} />
      <HourlyWeather weatherData={weatherData} />
      <ForecastContainer
        weatherData={weatherData}
        scheduleData={scheduleData}
      />
    </div>
  );
};

export default Container;
