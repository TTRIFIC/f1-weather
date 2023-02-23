import React from "react";

import "./HourlyWeather.css";

// Need to upgrade API and figure out what param to bring in via props

const HourlyWeather = ({ weatherData }) => {
  return (
    <div className="HourlyCard">
      <div className="HourlyTitle">HOURLY</div>
      <div className="HourlyWrapper">
        <div className="HourWrapper">
          <div className="HourTime">Time</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[0].weather[0].icon}.png`}
            alt={weatherData.hourly[0].weather[0].main}
          />
          <div>Temp</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">Time</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[1].weather[0].icon}.png`}
            alt={weatherData.hourly[1].weather[0].main}
          />
          <div>Temp</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">Time</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[2].weather[0].icon}.png`}
            alt={weatherData.hourly[2].weather[0].main}
          />
          <div>Temp</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">Time</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[3].weather[0].icon}.png`}
            alt={weatherData.hourly[3].weather[0].main}
          />
          <div>Temp</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">Time</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[4].weather[0].icon}.png`}
            alt={weatherData.hourly[4].weather[0].main}
          />
          <div>Temp</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">Time</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[5].weather[0].icon}.png`}
            alt={weatherData.hourly[5].weather[0].main}
          />
          <div>Temp</div>
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
