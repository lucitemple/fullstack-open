import React from "react";

export const ShowButton = ({ setResults, country }) => {
  return (
    <button type="button" onClick={() => setResults([country])}>
      show
    </button>
  );
};
