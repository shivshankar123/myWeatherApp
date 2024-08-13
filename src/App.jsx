import React, { useState, useEffect } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import WeatherCard from "./components/weatherCard";
import WeatherGrid from "./components/weatherGrid";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  // Fetch weather data from OpenWeather API here

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-red-300 to-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar />
        <WeatherCard />
        <WeatherGrid data={weatherData} />
      </main>
    </div>
  );
}

export default App;
