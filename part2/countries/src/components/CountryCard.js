import React from "react";
import { Weather } from "../util/Weather";

export const CountryCard = ({ result }) => {
  return (
    <>
      <h2>{result.name}</h2>
      <p>Capital: {result.capital}</p>
      <p>Population: {result.population}</p>
      <h3>Spoken languages:</h3>
      <ul>
        {result.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={result.flag} alt={`${result.name} flag`} width="200" />
      <Weather capital={result.capital} />
    </>
  );
};
