import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Results } from "./components/Results";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header">
        <p>
          find countries <input onChange={onSearch} />
        </p>
        <Results results={results} />
      </header>
    </div>
  );
}

export default App;
