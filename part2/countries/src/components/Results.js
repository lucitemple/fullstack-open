import React from "react";
import "../App.css";
import { CountryCard } from "./CountryCard";
import { ResultsList } from "./ResultsList";

export const Results = ({ results, setResults, weather }) => {
  let tenResults = [];
  if (results.length > 1) {
    tenResults = results.slice(0, 10);
  }
  return (
    <>
      {results.length < 1 ? (
        <p>No matches, please try again</p>
      ) : results.length === 1 ? (
        <CountryCard
          result={results[0]}
          weather={weather}
        />
      ) : results.length > 10 ? (
        <p>Too many matches, please be more specific</p>
      ) : (
        <ResultsList tenResults={tenResults} setResults={setResults} />
      )}
    </>
  );
};
