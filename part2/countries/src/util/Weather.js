import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherCard } from "../components/WeatherCard";

const api_key = `${process.env.REACT_APP_WEATHERSTACK_API_KEY}`;

export const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({});
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiUrl = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`;

    axios.get(apiUrl).then((response) => {
      setWeather(response.data);
      setDisplay(true);
    });
  }, [capital]);

  if (display) {
    return <WeatherCard weather={weather} />;
  } else {
    return null;
  }
};
