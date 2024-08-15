import React from "react";

function CurrentWeather({ data, cityName }) {
  if (!data) {
    return null;
  }

  // Determine the background color based on the weather condition
  let backgroundColor = "bg-gradient-to-r from-blue-300 via-blue-100 to-white"; // Default to a light gradient

  if (data.description.includes("clear")) {
    backgroundColor =
      "bg-gradient-to-r from-yellow-300 via-yellow-100 to-white";
  } else if (data.description.includes("cloud")) {
    backgroundColor = "bg-gradient-to-r from-gray-300 via-gray-200 to-white";
  } else if (data.description.includes("rain")) {
    backgroundColor = "bg-gradient-to-r from-blue-400 via-blue-200 to-white";
  } else if (data.description.includes("snow")) {
    backgroundColor = "bg-gradient-to-r from-white via-gray-200 to-white";
  }

  return (
    <div className="max-h-screen flex items-center justify-center">
      <div
        className={`p-8 rounded-lg shadow-lg ${backgroundColor} max-w-md w-full`}
      >
        <div className="flex flex-col items-center mb-6">
          <img
            alt="weather icon"
            className="w-24 h-24 mb-4"
            src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
          />
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-800">
              {cityName.toUpperCase()}
            </h2>
            <p className="text-lg text-gray-600 capitalize">
              {data.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center">
            <p className="text-6xl font-bold text-gray-900">{data.temp}°C</p>
            <p className="text-lg mt-2 text-gray-700">
              Feels like:{" "}
              <span className="font-semibold">{data.feels_like}°C</span>
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700">
              Wind: <span className="font-semibold">{data.wind.speed} m/s</span>
            </p>
            <p className="text-lg text-gray-700">
              Humidity: <span className="font-semibold">{data.humidity}%</span>
            </p>
            <p className="text-lg text-gray-700">
              Pressure:{" "}
              <span className="font-semibold">{data.pressure} hPa</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
