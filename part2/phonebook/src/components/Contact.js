import React from "react";

export const Contact = ({persons}) => {
  return (
    <>
      {persons.map((item) => {
        return (
          <p key={item.name}>
            {item.name}: {item.number}
          </p>
        );
      })}
    </>
  );
};
