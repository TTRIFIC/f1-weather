import React from "react";

import "./HourlyWeather.css";

let tempConvertCelsius = (temp) => {
  const tempCelsius = (temp - 273.15).toFixed(0);

  return `${tempCelsius}°C`;
};

let tempConvertFahrenheit = (temp) => {
  const tempFahrenheit = ((temp * 9) / 5 - 459.67).toFixed(0);

  return `${tempFahrenheit}°F`;
};

const HourlyWeather = ({ weatherData }) => {
  let hourTempsCelsius = [];
  let hourTempsFahrenheit = [];

  for (let i = 0; i < 6; i++) {
    hourTempsCelsius[i] = tempConvertCelsius(weatherData.hourly[i].temp);
    hourTempsFahrenheit[i] = tempConvertFahrenheit(weatherData.hourly[i].temp);
  }

  return (
    <div className="HourlyCard">
      <div className="HourlyTitle">HOURLY</div>
      <div className="HourlyWrapper">
        <div className="HourWrapper">
          <div className="HourTime">1 hr</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[0].weather[0].icon}@2x.png`}
            alt={weatherData.hourly[0].weather[0].main}
          />
          <div className="HourTemp">{hourTempsFahrenheit[0]}</div>
          <div className="HourTemp">{hourTempsCelsius[0]}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">2 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[1].weather[0].icon}@2x.png`}
            alt={weatherData.hourly[1].weather[0].main}
          />
          <div className="HourTemp">{hourTempsFahrenheit[1]}</div>
          <div className="HourTemp">{hourTempsCelsius[1]}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">3 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[2].weather[0].icon}@2x.png`}
            alt={weatherData.hourly[2].weather[0].main}
          />
          <div className="HourTemp">{hourTempsFahrenheit[2]}</div>
          <div className="HourTemp">{hourTempsCelsius[2]}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">4 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[3].weather[0].icon}@2x.png`}
            alt={weatherData.hourly[3].weather[0].main}
          />
          <div className="HourTemp">{hourTempsFahrenheit[3]}</div>
          <div className="HourTemp">{hourTempsCelsius[3]}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">5 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[4].weather[0].icon}@2x.png`}
            alt={weatherData.hourly[4].weather[0].main}
          />
          <div className="HourTemp">{hourTempsFahrenheit[4]}</div>
          <div className="HourTemp">{hourTempsCelsius[4]}</div>
        </div>
        <div className="HourWrapper">
          <div className="HourTime">6 hrs</div>
          <img
            className="HourIcon"
            src={`http://openweathermap.org/img/wn/${weatherData.hourly[5].weather[0].icon}@2x.png`}
            alt={weatherData.hourly[5].weather[0].main}
          />
          <div className="HourTemp">{hourTempsFahrenheit[5]}</div>
          <div className="HourTemp">{hourTempsCelsius[5]}</div>
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
