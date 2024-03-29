import React, { useState, useEffect } from "react";

import "./Timer.css";

// Figure out how to do the timer
// May need to pass in props from App.js

const Timer = ({ raceDate, raceTime }) => {
  const [expiryTime, setExpiryTime] = useState(`${raceDate} ${raceTime}`);
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }

      return null;
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  }, []);

  const outputTimer = `${countdownTime.countdownDays} Days ${countdownTime.countdownHours} Hours ${countdownTime.countdownMinutes} Minutes ${countdownTime.countdownSeconds} Seconds`;

  return <div className="timer">{outputTimer}</div>;
};

export default Timer;
