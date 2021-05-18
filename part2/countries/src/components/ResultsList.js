import React from "react";
import { ShowButton } from "./ShowButton";

export const ResultsList = ({ tenResults, setResults }) => {
  return (
    <>
      {tenResults.map((country) => {
        return (
          <div key={country.name}>
            {country.name}
            <ShowButton
              key={`${country.name}Button`}
              setResults={setResults}
              country={country}
            />
          </div>
        );
      })}
    </>
  );
};
