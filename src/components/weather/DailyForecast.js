import React from "react";

import "./DailyForecast.css";

// Will need to pass down weather info as props

const DailyForecast = ({ dayInfo }) => {
  return (
    <div className="daily-card">
      <div className="DayTitle">{dayInfo.day}</div>
      <img
        className="CurrentWeatherIcon"
        src={`http://openweathermap.org/img/wn/${dayInfo.icon}@4x.png`}
        alt={dayInfo.condition}
      />
      <div className="condition">{dayInfo.condition}</div>
    </div>
  );
};

export default DailyForecast;
