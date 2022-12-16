import React from "react";
import Card from "../Card";

import "./DailyForecast.css";

// Will need to pass down weather info as props

const DailyForecast = () => {
  return (
    <Card>
      <div className="date">Test</div>
      <div className="icon">Icon</div>
      <div className="highs-lows">
        <div className="high">H: Hi</div>
        <div className="low">L: Lo</div>
      </div>
    </Card>
  );
};

export default DailyForecast;
