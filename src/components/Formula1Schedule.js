import axios from "axios";

const API_URL = "https://ergast.com/api/f1";

const getF1Schedule = async () => {
  try {
    // Fetches the current season
    const {
      data: {
        MRData: {
          SeasonTable: { Seasons },
        },
      },
    } = await axios.get(`${API_URL}/current.json`);
    const currentSeason = Seasons[0].season;

    // Fetches the schedule for the current season
    const {
      data: {
        MRData: {
          RaceTable: { Races },
        },
      },
    } = await axios.get(`${API_URL}/${currentSeason}.json`);

    // Create a schedule array with the location and date of each race
    const schedule = Races.map((race) => ({
      location: race.Circuit.Location.country,
      date: race.date,
    }));

    return schedule;
  } catch (error) {
    console.log(error);
  }
};

export default getF1Schedule;
