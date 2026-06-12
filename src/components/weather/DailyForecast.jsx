import React from "react";

import "./DailyForecast.css";

const DailyForecast = ({ dayInfo }) => {
  return (
    <div className="daily-card">
      <div className="DayTitle">{dayInfo.day}</div>
      <img
        className="DayIcon"
        src={`http://openweathermap.org/img/wn/${dayInfo.icon}@2x.png`}
        alt={dayInfo.condition}
      />
      <div className="DayCondition">{dayInfo.condition}</div>
    </div>
  );
};

export default DailyForecast;
