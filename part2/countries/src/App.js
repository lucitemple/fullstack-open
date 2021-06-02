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
      <h1>
        Find countries <input onChange={onSearch} />
      </h1>
      {search !== "" && <Results results={results} setResults={setResults} />}
    </div>
  );
}

export default App;
