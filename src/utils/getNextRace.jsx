import schedule from "../data/f1-schedule-2026.json";

// Selects the next upcoming race from the local schedule based on the race
// start time. If every race in the season has already happened, the final
// race is returned so the app always has something to display.
const getNextRace = (now = new Date()) => {
  const { races } = schedule;
  const upcoming = races.find((race) => new Date(race.sessions.race) > now);
  return upcoming || races[races.length - 1];
};

export default getNextRace;
