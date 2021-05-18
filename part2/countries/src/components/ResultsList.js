import React from "react";

export const ResultsList = ({ tenResults }) => {

  return (
    <>
      {tenResults.map((country) => {
        console.log(country.name);
        return <p key={country.name}>{country.name}</p>;
      })}
    </>
  );
};
