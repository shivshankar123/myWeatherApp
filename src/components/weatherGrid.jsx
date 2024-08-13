import React from "react";

function WeatherGrid() {
  return;
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {data.map((item, index) => (
      <WeatherCard key={index} {...item} />
    ))}
  </div>;
}

export default WeatherGrid;
