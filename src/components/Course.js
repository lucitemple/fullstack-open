import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "./Total";

export const Course = ({ name, parts }) => {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};
