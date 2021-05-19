import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Results } from "./components/Results";
import { getWeather } from "./util/Weather";
import { WeatherCard} from "./components/WeatherCard"

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (search !== "") {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${search}`)
        .then((response) => {
          setCountries(response.data);
        });
    }
  }, [search]);

  const onSearch = (event) => {
    setSearch(event.target.value.toLowerCase());

    let filtering = countries.filter((country) => {
      return country.name.toLowerCase().includes(search);
    });
    setResults(filtering);
  };

  useEffect(() => {
    if (results.length === 1) {
      console.log(results);
      let currentWeather = getWeather();
      console.log(currentWeather);
       setWeather(currentWeather);
    }
  }, [results])


  return (
    <div className="App">
      <header className="App-header">
        <p>
          find countries <input onChange={onSearch} />
        </p>
        <Results results={results} setResults={setResults} weather={weather} />
        {(weather !== []) && <WeatherCard weather={weather} />}
      </header>
    </div>
  );
}

export default App;
