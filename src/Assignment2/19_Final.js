//19_Final.js
import React from 'react';
import WeatherForecast from './19_.js';

function Weather() {
  const weatherData = [
    { date: '2024-03-19', temperature: 25, weatherCondition: 'Sunny' },
    { date: '2024-03-20', temperature: 23, weatherCondition: 'Partly Cloudy' },
    { date: '2024-03-21', temperature: 20, weatherCondition: 'Cloudy' }
  ];

  return (
    <div>
      <h1>Weather Forecast</h1>
      <WeatherForecast weatherData={weatherData} />
    </div>
  );
}

export default Weather;