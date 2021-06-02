import React from "react";
import { Contact} from "./Contact";

export const Filter = ({ onSearch, persons, removeName }) => {
  return (
    <>
      filter by name:
      <input onChange={onSearch} />
      <Contact persons={persons} removeName={removeName} />
    </>
  );
};
