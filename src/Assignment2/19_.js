//19_.js
import React from 'react';

const WeatherForecast = ({ weatherData }) => {
  return (
    <div>
      {weatherData.map((data, index) => (
        <div key={index} className="weather-card">
          <p>Date: {data.date}</p>
          <p>Temperature: {data.temperature}°C</p>
          <p>Weather Condition: {data.weatherCondition}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;