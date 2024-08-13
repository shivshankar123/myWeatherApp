import React from "react";

function WeatherCard({ city, temp, condition, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold">{city}</h2>
      <div className="text-4xl font-bold my-2">{temp}°</div>
      <img src={icon} alt={condition} className="w-16 h-16 mx-auto" />
      <p className="text-sm text-gray-600">{condition}</p>
    </div>
  );
}
export default weatherCard;
