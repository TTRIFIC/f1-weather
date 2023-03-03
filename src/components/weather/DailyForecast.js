import React from "react";

import "./DailyForecast.css";

// Will need to pass down weather info as props

const DailyForecast = ({ dayInfo }) => {
  return (
    <div className="daily-card">
      <div className="DayTitle">{dayInfo.day}</div>
      <div className="icon">{dayInfo.icon}</div>
      <div className="condition">{dayInfo.condition}</div>
    </div>
  );
};

export default DailyForecast;
