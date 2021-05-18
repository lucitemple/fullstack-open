import React from "react";

export const CountryCard = ({ result }) => {
  return (
    <>
      <h1>{result.name}</h1>
      <p>capital: {result.capital}</p>
      <p>population: {result.population}</p>
      <h2>languages</h2>
      <ul>
        {result.languages.map((language) => (
          <li key={language}>{language.name}</li>
        ))}
      </ul>
      <img src={result.flag} alt={`${result.name} flag`} />
    </>
  );
};
