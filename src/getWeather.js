import updateDOM from "./dom/updateDOM";
import { setLastCity } from "./localStorage";

let lastCity = "";
export default async function getWeather(city) {
  const checkCity = city || lastCity;
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=db7ac4296d854558ab2174921240503&q=${checkCity}&days=3`,
      { mode: "cors" },
    );
    if (response.status === 400) {
      alert("This city does not exist!");
      return;
    }
    const weatherData = await response.json();
    lastCity = weatherData.location.name;
    setLastCity(lastCity);
    updateDOM(weatherData);
  } catch (error) {
    console.log("An error occurred while fetching weather data:", error);
  }
}
