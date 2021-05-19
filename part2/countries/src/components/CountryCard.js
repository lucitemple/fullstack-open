import React from "react";
import { Weather } from "../util/Weather";

export const CountryCard = ({ result }) => {
  return (
    <>
      <h1>{result.name}</h1>
      <p>capital: {result.capital}</p>
      <p>population: {result.population}</p>
      <h2>languages</h2>
      <ul>
        {result.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={result.flag} alt={`${result.name} flag`} />
      <Weather capital={result.capital} />
    </>
  );
};
