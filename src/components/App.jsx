import { useState } from "react";
import { nanoid } from 'nanoid';
import ContactsForm from "components/ContactsForm/ContactsForm";
import ContactList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import useLocalStorage from "./hooks/useLocalStorage";

export function App () {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const onAddContact = ({name, number}) => {
    const newContact = { id: nanoid(), name, number };
    
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is alredy in contacts.`)
      : setContacts(prevState => [newContact, ...prevState]);
  };

  const onDeleteContact = id => {
    setContacts(() => contacts.filter(contact => contact.id !== id))
    };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm
          onSubmit={onAddContact}
        />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter
            value={filter}
            onChange={changeFilter}
          />
        )}
        
        <ContactList
          contacts={getVisibleContacts()}
          filter={filter}
          onDeleteContact={onDeleteContact}
        />
      </div>
    );
  }
