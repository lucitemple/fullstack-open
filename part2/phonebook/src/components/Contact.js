import React from "react";

export const Contact = ({ persons, removeName }) => {
  return (
    <>
      {persons.map((item) => {
        return (
          <div key={item.name}>
            {item.name}: {item.number}
            <button value={item.id} name={item.name} onClick={() => removeName(item)}>
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};
