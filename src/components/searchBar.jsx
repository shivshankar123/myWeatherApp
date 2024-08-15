import React, { useState } from "react";
import { fetchWeatherData } from "./api";

function SearchBar({ onSearchChange }) {
  const [cityName, setCityName] = useState("");

  const handleOnChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      onSearchChange(cityName);
    }
  };

  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        placeholder="Search City"
        value={cityName}
        onChange={handleOnChange}
        onKeyDown={handleSearch}
        className="input input-bordered p-4 rounded-full shadow-md bg-white text-black w-3/4"
      />
    </div>
  );
}

export default SearchBar;
