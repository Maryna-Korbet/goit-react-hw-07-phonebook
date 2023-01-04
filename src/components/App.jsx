import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactsForm from "components/ContactsForm/ContactsForm";
import ContactList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    
    filter: '',
  };

  onAddContact = ({name, number}) => {
    const newContact = { id: nanoid(), name, number };
    
    this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? window.alert(`${name} is alredy in contacts.`)
      : this.setState(prevState => {
        return { contacts: [newContact, ...prevState.contacts]};
      });
  };

  onDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const getVisibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm
          onSubmit={this.onAddContact}
        />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter
            value={filter}
            onChange={this.changeFilter}
          />
        )}
        
        <ContactList
          contacts={getVisibleContacts}
          filter={filter}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
};
