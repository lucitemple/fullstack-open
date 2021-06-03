import React from "react";
import { Course } from "./components/Course";
import { courses_2 as multicourse } from "./data";

const App = () => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {multicourse.map((course) => (
        <Course name={course.name} parts={course.parts} />
      ))}
    </>
  );
};

export default App;
