import React from "react";
import DailyForecast from "./DailyForecast";

import "./ForecastContainer.css";

// Will need to pass down props for weather info

const ForecastContainer = () => {
  return (
    <div className="forecast-wrapper">
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
    </div>
  );
};

export default ForecastContainer;
