import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherCard } from "../components/WeatherCard";

const API_KEY = `${process.env.REACT_APP_WEATHERSTACK_API_KEY}`;
const apiUrl = "http://api.weatherstack.com/current";

export const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({});
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=a750d65f415e217ae499dc64f7da87a5&query=New York`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        setDisplay(true);
      });
  }, [capital]);

  if (display) {
    return <WeatherCard weather={weather} />;
  } else { return null}
};
