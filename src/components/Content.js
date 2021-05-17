import React from 'react';
import {Part} from './Part';

export const Content = ({ parts }) => {

  return (
    <>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id}/>
      ))}
    </>
  );
};