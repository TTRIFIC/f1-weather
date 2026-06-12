import React from "react";

const Layout = () => {
  return (
    <div className="Container">
      <div className="Logo" />
      <div className="Location-Area">
        <div className="City" />
        <div className="Location" />
      </div>
      <div className="Countdown Timer" />
      <div className="CurrentWeather">
        <div className="Card">
          <div className="CurrentWeatherTemperature" />
          <div className="CurrentWeatherConditions" />
          <div className="CurrentWeatherIcon" />
        </div>
      </div>
      <div className="HourlyWeather">
        <div className="Card"></div>
      </div>
      <div className="ForecastContainer">
        <div className="Day1Forecast">
          <div className="Card">
            <div className="Day1Date" />
            <div className="Day1ForecastIcon" />
            <div className="Day1ForecastHigh" />
            <div className="Day1ForecastLow" />
          </div>
        </div>
        <div className="Day2Forecast">
          <div className="Card">
            <div className="Day2Date" />
            <div className="Day2ForecastIcon" />
            <div className="Day2ForecastHigh" />
            <div className="Day2ForecastLow" />
          </div>
        </div>
        <div className="Day3Forecast">
          <div className="Card">
            <div className="Day3Date" />
            <div className="Day3ForecastIcon" />
            <div className="Day3ForecastHigh" />
            <div className="Day3ForecastLow" />
          </div>
        </div>
        <div className="Radar">
          <div className="Card">
            <div className="RadarMap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
