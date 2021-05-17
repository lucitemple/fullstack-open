import React, { useState } from "react";
//import { data } from "./data";

const Numbers = ({ newName, persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((item) => {
        return <p key={item.name}>{item.name}</p>;
      })}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((contact) => contact.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      setPersons(persons.concat({ name: newName }));
    }
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <input value={newName} onChange={handleChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers newName={newName} persons={persons} />
    </div>
  );
};

export default App;
