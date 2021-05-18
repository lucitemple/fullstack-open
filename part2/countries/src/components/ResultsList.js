import React from "react";
import {ShowButton} from "./ShowButton";

export const ResultsList = ({ tenResults }) => {

  return (
    <>
      {tenResults.map((country) => {
        return(<><p key={country.name}>{country.name}</p> <ShowButton key={`${country.name}Button`} /> </>);
      })}
    </>
  );
};
