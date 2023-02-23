import axios from "axios";

async function executeRequests(lat, lon) {
  await axios
    .get(`http://ergast.com/api/f1/current/next.json`)
    .then((response) => {
      setScheduleData(response.data);
      setCity(
        response.data.MRData.RaceTable.Races[0].Circuit.Location.locality
      );
      setLocation(
        response.data.MRData.RaceTable.Races[0].Circuit.Location.country
      );
      setLat(response.data.MRData.RaceTable.Races[0].Circuit.Location.lat);
      setLon(response.data.MRData.RaceTable.Races[0].Circuit.Location.long);
    })
    .catch((error) => {
      console.error(error);
    });

  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    .then((response) => {
      setWeatherData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
