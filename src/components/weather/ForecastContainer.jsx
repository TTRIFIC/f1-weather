import React from "react";
import DailyForecast from "./DailyForecast";

import "./ForecastContainer.css";

const ForecastContainer = ({ weatherData, race }) => {
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

  // Forecast the three on-track days: practice (Fri), qualifying/sprint (Sat),
  // and the race (Sun). On sprint weekends the Saturday slot uses the sprint.
  let dayOneDate = new Date(race.sessions.fp1);
  let dayTwoDate = new Date(race.sessions.sprint || race.sessions.qualifying);
  let dayThreeDate = new Date(race.sessions.race);

  let dayOne = {
    day: days[dayOneDate.getDay()],
    icon: null,
    condition: "No data yet!",
  };
  let dayTwo = {
    day: days[dayTwoDate.getDay()],
    icon: null,
    condition: "No data yet!",
  };
  let dayThree = {
    day: days[dayThreeDate.getDay()],
    icon: null,
    condition: "No data yet!",
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
