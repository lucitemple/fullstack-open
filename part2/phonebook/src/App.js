import React, { useState } from "react";
import { data } from "./data";

const Numbers = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
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

const App = () => {
  const [persons, setPersons] = useState(data);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (func, e) => {
    func(e.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((contact) => contact.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
    setNewName("");
    setNewNumber("");
  };

  const onSearch = (event) => {
    setSearch(event.target.value.toLowerCase());

    let filtering = persons.filter((person) => {
      return person.name.toLowerCase().includes(search);
    });
    setFiltered(filtering);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter by name:
        <input onChange={onSearch} />
        {filtered.map((item) => {
          return (
            <p key={item.name}>
              {item.name}: {item.number}
            </p>
          );
        })}
      </div>
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
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
