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
  }, []);

  const handleChange = (func, e) => {
    func(e.target.value);
  };

  const giveNotification = (notification) => {
    setNotification(notification);
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
            setPersons(
              persons.map((p) => (p.id !== contact.id ? p : updatedContact))
            );
            giveNotification({
              status: `success`,
              message: `Updated ${newName} in the phonebook.`,
            });
          })
          .catch((error) => {
            giveNotification({
              status: "error",
              message: `Information of ${contact.name} has already been removed from the server.`,
            });
            setPersons(persons.filter((p) => p.id !== contact.id));
          });
      }
    } else {
      const newContact = { name: newName, number: newNumber };
      contactsService.create(newContact).then((returnedContact) => {
        setPersons(persons.concat(returnedContact));
        giveNotification({
          status: `success`,
          message: `Added ${newName} to the phonebook.`,
        });
      });
    }

    setNewName("");
    setNewNumber("");
  };

  const removeName = (event) => {
    if (
      window.confirm(
        `Do you really want to delete ${event.name} from the database?`
      )
    ) {
      contactsService
        .remove(event.id)
        .then(() => {
          giveNotification({
            status: "success",
            message: `Deleted ${event.name} from the phonebook.`,
          });
          setPersons(persons.filter((p) => p.id !== event.id));
        })
        .catch((error) => {
          giveNotification({
            status: "error",
            message: `Information of ${event.name} has already been removed from the server.`,
          });
          setPersons(persons.filter((p) => p.id !== event.id));
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
      <Filter onSearch={onSearch} persons={filtered} removeName={removeName} />
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
