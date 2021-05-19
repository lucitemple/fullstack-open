import React, { useState, useEffect } from "react";
import { Numbers } from "./components/Numbers";
import { Filter } from "./components/Filter";
import { AddContact } from "./components/AddContact";
import contactsService from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    contactsService.getAll().then((initialContacts) => {
      setPersons(initialContacts);
    });
  }, [persons]);

  const handleChange = (func, e) => {
    func(e.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((contact) => contact.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const newContact = { name: newName, number: newNumber };
      contactsService.create(newContact).then((returnedContact) => {
        setPersons(persons.concat(returnedContact));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const removeName = (event) => {
    if (
      window.confirm(
        `Do you really want to delete ${event.target.name} from the database?`
      )
    ) {
      contactsService.remove(event.target.value);
      setPersons(persons.filter((person) => person.id !== event.target.value));
    }
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
      <Filter onSearch={onSearch} persons={filtered} />
      <AddContact
        addName={addName}
        newName={newName}
        handleChange={handleChange}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <Numbers persons={persons} removeName={removeName} />
    </div>
  );
};

export default App;
