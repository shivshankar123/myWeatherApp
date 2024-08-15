import React from "react";

function Forecast({ data, cityName }) {
  // Ensure data is present and has the 'daily' array
  if (!data || !data.daily) {
    return <p>No forecast data available.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">7-Day Forecast for {cityName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.daily.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="forecast-item bg-blue-100 p-4 rounded-lg shadow-md"
          >
            <p className="text-xl font-semibold">
              {new Date(item.dt * 1000).toLocaleDateString(undefined, {
                weekday: "long",
              })}
            </p>
            <div className="flex items-center justify-center">
              <img
                alt="weather icon"
                className="weather-icon w-16 h-16"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <div className="ml-4 text-center">
                <p className="text-xl font-semibold">{item.temp.day}°C</p>
                <p className="text-sm mt-2">{item.weather[0].description}</p>
              </div>
            </div>
            <div className="details mt-4">
              <div className="parameter-row">
                <span className="parameter-label font-medium">Feels like:</span>
                <span className="parameter-value ml-2">
                  {item.feels_like.day}°C
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label font-medium">Wind:</span>
                <span className="parameter-value ml-2">
                  {item.wind_speed} m/s
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label font-medium">Humidity:</span>
                <span className="parameter-value ml-2">{item.humidity}%</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label font-medium">Pressure:</span>
                <span className="parameter-value ml-2">
                  {item.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
