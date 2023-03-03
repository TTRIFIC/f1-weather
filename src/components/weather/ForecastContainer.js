import React from "react";
import DailyForecast from "./DailyForecast";

import "./ForecastContainer.css";

const ForecastContainer = ({ weatherData, scheduleData }) => {
  var days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  let dayOneDate = new Date(
    `${scheduleData.MRData.RaceTable.Races[0].FirstPractice.date}
      ${scheduleData.MRData.RaceTable.Races[0].FirstPractice.time}`
  );
  let dayTwoDate = new Date(
    `${scheduleData.MRData.RaceTable.Races[0].Qualifying.date}
      ${scheduleData.MRData.RaceTable.Races[0].Qualifying.time}`
  );
  let dayThreeDate = new Date(
    `${scheduleData.MRData.RaceTable.Races[0].date}
      ${scheduleData.MRData.RaceTable.Races[0].time}`
  );

  if (scheduleData.MRData.RaceTable.Races[0].ThirdPractice.Date) {
    dayTwoDate = new Date(
      `${scheduleData.MRData.RaceTable.Races[0].SecondPractice.date}
        ${scheduleData.MRData.RaceTable.Races[0].SecondPractice.time}`
    );
  }

  const dayOne = {
    day: days[dayOneDate.getDay()],
    icon: null,
    condition: "Sunny",
  };
  const dayTwo = {
    day: days[dayTwoDate.getDay()],
    icon: null,
    condition: "Clear",
  };
  const dayThree = {
    day: days[dayThreeDate.getDay()],
    icon: null,
    condition: "Cloudy",
  };

  return (
    <div className="forecast-wrapper">
      <DailyForecast dayInfo={dayOne} />
      <DailyForecast dayInfo={dayTwo} />
      <DailyForecast dayInfo={dayThree} />
    </div>
  );
};

export default ForecastContainer;
