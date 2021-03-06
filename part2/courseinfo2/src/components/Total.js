import React from "react";

export const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p style={{ fontWeight: `bold` }}>Number of exercises {total}</p>;
};
