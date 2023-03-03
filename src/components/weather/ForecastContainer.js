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

  let dayOne = {
    day: days[dayOneDate.getDay()],
    icon: null,
    condition: "No Data!",
  };
  let dayTwo = {
    day: days[dayTwoDate.getDay()],
    icon: null,
    condition: "No Data!",
  };
  let dayThree = {
    day: days[dayThreeDate.getDay()],
    icon: null,
    condition: "No Data!",
  };

  for (let i = 0; i < 8; i++) {
    let weatherTime = new Date(weatherData.daily[i].dt * 1000);

    let weatherInfo = {
      year: weatherTime.getFullYear(),
      month: weatherTime.getMonth(),
      day: weatherTime.getDay(),
    };

    if (
      weatherInfo.year === dayOneDate.getFullYear() &&
      weatherInfo.month === dayOneDate.getMonth() &&
      weatherInfo.day === dayOneDate.getDay()
    ) {
      dayOne.icon = weatherData.daily[i].weather[0].icon;
      dayOne.condition = weatherData.daily[i].weather[0].main;
    }
    if (
      weatherInfo.year === dayTwoDate.getFullYear() &&
      weatherInfo.month === dayTwoDate.getMonth() &&
      weatherInfo.day === dayTwoDate.getDay()
    ) {
      dayTwo.icon = weatherData.daily[i].weather[0].icon;
      dayTwo.condition = weatherData.daily[i].weather[0].main;
    }
    if (
      weatherInfo.year === dayThreeDate.getFullYear() &&
      weatherInfo.month === dayThreeDate.getMonth() &&
      weatherInfo.day === dayThreeDate.getDay()
    ) {
      dayThree.icon = weatherData.daily[i].weather[0].icon;
      dayThree.condition = weatherData.daily[i].weather[0].main;
    }
  }

  return (
    <div className="forecast-wrapper">
      <DailyForecast dayInfo={dayOne} />
      <DailyForecast dayInfo={dayTwo} />
      <DailyForecast dayInfo={dayThree} />
    </div>
  );
};

export default ForecastContainer;
