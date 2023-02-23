import React from "react";

import "./HourlyWeather.css";

// Need to upgrade API and figure out what param to bring in via props

let TempConversion = (temp) => {
  const tempFahrenheit = ((temp * 9) / 5 - 459.67).toFixed(0);
  const tempCelsius = (temp - 273.15).toFixed(0);

  return `${tempFahrenheit}°F / ${tempCelsius}°C`;
};

const HourlyWeather = ({ weatherData }) => {
  const hour1Temp = TempConversion(weatherData.hourly[0].temp);
  const hour2Temp = TempConversion(weatherData.hourly[1].temp);
  const hour3Temp = TempConversion(weatherData.hourly[2].temp);
  const hour4Temp = TempConversion(weatherData.hourly[3].temp);
  const hour5Temp = TempConversion(weatherData.hourly[4].temp);
  const hour6Temp = TempConversion(weatherData.hourly[5].temp);

  return (
    <div className="HourlyCard">
      <div className="HourlyTitle">HOURLY</div>
      <div className="HourlyWrapper">
        <div className="HourWrapper">
          <div className="HourTime">1 hr</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[0].weather[0].icon}.png`}
            alt={weatherData.hourly[0].weather[0].main}
          />
          <div className="HourTemp">{hour1Temp}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">2 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[1].weather[0].icon}.png`}
            alt={weatherData.hourly[1].weather[0].main}
          />
          <div className="HourTemp">{hour2Temp}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">3 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[2].weather[0].icon}.png`}
            alt={weatherData.hourly[2].weather[0].main}
          />
          <div className="HourTemp">{hour3Temp}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">4 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[3].weather[0].icon}.png`}
            alt={weatherData.hourly[3].weather[0].main}
          />
          <div className="HourTemp">{hour4Temp}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">5 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[4].weather[0].icon}.png`}
            alt={weatherData.hourly[4].weather[0].main}
          />
          <div className="HourTemp">{hour5Temp}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">6 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[5].weather[0].icon}.png`}
            alt={weatherData.hourly[5].weather[0].main}
          />
          <div className="HourTemp">{hour6Temp}</div>
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
