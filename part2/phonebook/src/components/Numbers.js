import React from "react";
import {Contact} from "./Contact";

export const Numbers = ({persons, removeName}) => {
  return (
    <>
      <h2>Numbers</h2>
      <Contact persons={persons} removeName={removeName}/>
    </>
  );
};
