import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../components/api";
import SearchBar from "../components/searchBar";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/forecast";
import Header from "../components/header";

const Home = () => {
  const [cityName, setCityName] = useState("Daly City");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCityNameChange = async (newCityName) => {
    setCityName(newCityName);
    setError(null); // Clear any previous errors

    try {
      const weatherDetails = await fetchWeatherData(newCityName);
      setWeatherData(weatherDetails);

      if (!weatherDetails) {
        throw new Error("City not found");
      }
    } catch (error) {
      setError("City not found. Please enter a valid city name.");
      setWeatherData(null); // Clear weather data if there's an error
    }
  };

  useEffect(() => {
    handleCityNameChange("Daly City");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-red-300 to-white">
      <Header />
      <SearchBar onSearchChange={handleCityNameChange} />
      {error ? (
        <div className="text-center text-red-600 text-xl mt-8">{error}</div>
      ) : (
        <>
          <CurrentWeather data={weatherData} cityName={cityName} />
          <Forecast data={weatherData} cityName={cityName} />
        </>
      )}
    </div>
  );
};

export default Home;
