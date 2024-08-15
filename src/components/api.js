export const fetchWeatherData = async (cityName) => {
  const WEATHER_API_KEY = "e5bfc0c4fb55e5416c026a532bc29030";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  const { lon, lat } = data.coord;
  const weatherDetails = {
    lon,
    lat,
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    wind: data.wind,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
  return weatherDetails;
};
