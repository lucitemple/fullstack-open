import React from "react";
import { Contact} from "./Contact";

export const Filter = ({ onSearch, persons }) => {
  return (
    <>
        filter by name:
        <input onChange={onSearch} />
        <Contact persons={persons} />
    </>
  );
};
