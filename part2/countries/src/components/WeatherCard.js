import React from "react";

export const WeatherCard = ({ weather }) => {
  return (
    <>
      <h3>Weather in {weather.location.name}</h3>
      <p>Temperature: {weather.current.temperature}°C</p>
      <img
        src={weather.current.weather_icons[0]}
        alt={weather.current.weather_desciptions + "icon"}
      />
      <p>
        Wind: {weather.current.wind_speed} km/h direction{" "}
        {weather.current.wind_dir}
      </p>
    </>
  );
};
