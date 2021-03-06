import React from "react";
import "../App.css";
import { CountryCard } from "./CountryCard";
import { ResultsList } from "./ResultsList";

export const Results = ({ results, setResults }) => {
  let tenResults = [];
  if (results.length > 1) {
    tenResults = results.slice(0, 11);
  }
  return (
    <>
      {
        results.length < 1 ? (
        <p>No matches, please try again</p>
      ) : results.length === 1 ? (
        <CountryCard result={results[0]} />
      ) : results.length > 10 ? (
        <p>Too many matches, please be more specific</p>
      ) : (
        <ResultsList tenResults={tenResults} setResults={setResults} />
      )
      }
    </>
  );
};
