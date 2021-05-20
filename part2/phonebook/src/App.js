import React, { useState, useEffect } from "react";
import { Numbers } from "./components/Numbers";
import { Filter } from "./components/Filter";
import { AddContact } from "./components/AddContact";
import { Notification } from "./components/Notification";
import contactsService from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    contactsService.getAll().then((initialContacts) => {
      setPersons(initialContacts);
    });
  }, [persons]);

  const handleChange = (func, e) => {
    func(e.target.value);
  };

  const giveNotification = (prop) => {
    setNotification(`${prop} the phonebook.`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((contact) => contact.name === newName)) {
      if (
        window.confirm(
          `${newName} is already in the phonebook, replace the old number with a new one?`
        )
      ) {
        const contact = persons.find((p) => p.name === newName);
        let updatedContact = { name: newName, number: newNumber };

        contactsService
          .update(contact.id, updatedContact)
          .then(() => {
            giveNotification(`Updated ${newName} in `);
          })
          .catch((error) => {
            giveNotification(
              `Information of ${event.target.name} has already been removed from `
            );
            setPersons(persons.filter((p) => p.id !== event.target.value));
          });
      }
    } else {
      const newContact = { name: newName, number: newNumber };
      contactsService.create(newContact).then((returnedContact) => {
        setPersons(persons.concat(returnedContact));
        giveNotification(`Added ${newName} to `);
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
      contactsService
        .remove(event.target.value)
        .then(() => {
          giveNotification(`Deleted ${event.target.name} from `);
          setPersons(persons.filter((p) => p.id !== event.target.value));
        })
        .catch((error) => {
          giveNotification(
            `Information of ${event.target.name} has already been removed from `
          );
          setPersons(persons.filter((p) => p.id !== event.target.value));
        });
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
      <Notification notification={notification} />
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
