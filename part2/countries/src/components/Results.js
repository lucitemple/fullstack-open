import React from "react";
import "../App.css";
import { CountryCard } from "./CountryCard";
import { ResultsList } from "./ResultsList";

export const Results = ({ results }) => {
  const tenResults = results.slice(0, 10);
  return (
    <>
      {results.length <= 0 ? (
        <p>No matches, please try again</p>
      ) : results.length === 1 ? (
        <CountryCard result={results[0]} />
      ) : results.length > 1 ? (
        <ResultsList tenResults={tenResults} />
      ) : (
        <p>Too many matches, please be more specific</p>
      )}
    </>
  );
};
