import React from "react";
import '../App.css';

export const Results =({results}) => {
return (
    <>
      {results.map((country) => {
        return (
          <p key={country.name}>
            {country.name}
          </p>
        );
      })}
    </>
);
}