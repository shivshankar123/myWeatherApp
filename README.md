MY Weather App

This project is a weather application built using React.js. The app allows users to search for a city and view current weather conditions as well as a 7-day forecast.

Features
Search Functionality: Search for any city and get real-time weather data.
Current Weather Display: Displays current temperature, weather description, wind speed, humidity, and pressure.

Responsive Design: The application is fully responsive and adapts to different screen sizes.
Tech Stack
React.js: Frontend library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
OpenWeatherMap API: Provides the weather data used in the application.


Installation
Prerequisites
Node.js installed on your machine.
Steps
1. Clone the repository:
   git clone https://github.com/shivshankar123/myWeatherApp.git
2. Navigate to the project directory:
   cd myWeatherApp
3. Install the dependencies:
   npm i
4. Get an API key from OpenWeatherMap:
    - Sign up at OpenWeatherMap and get your free API key.
5. Add your API key:
    - Replace the WEATHER_API_KEY in api.js with your OpenWeatherMap API key.
6. Run the application:
   npm start

The app will run locally on http://localhost:5173.

Usage
- Search for a City: Type the name of a city in the search bar and press Enter. The app will display the current weather and a 7-day forecast for the selected city.
- View Current Weather: The main section of the app shows the current temperature, weather description, wind speed, humidity, and pressure for the selected city.
