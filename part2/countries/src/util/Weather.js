
import axios from "axios";
const API_KEY = `${process.env.REACT_APP_WEATHERSTACK_API_KEY}`;
const apiUrl = "http://api.weatherstack.com/current";

export const getWeather = () => {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=a750d65f415e217ae499dc64f7da87a5&query=New York`
        )
        .then((response) => {
          console.log(response.data);
          return response.data;
        });

};
