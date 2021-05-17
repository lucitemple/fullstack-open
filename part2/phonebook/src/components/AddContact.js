import React from "react";

export const AddContact = ({
  addName,
  newName,
  handleChange,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  return (
    <>
      <h2>Add contacts</h2>
      <form onSubmit={addName}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => handleChange(setNewName, event)}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={(event) => handleChange(setNewNumber, event)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};
