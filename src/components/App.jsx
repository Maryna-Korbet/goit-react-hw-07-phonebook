import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactsForm from "components/ContactsForm/ContactsForm";
import ContactList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
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
