import { Component } from "react";
import shortid from "shortid";
import ContactsForm from "components/ContactsForm/ContactsForm";

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    const newContact = {id: shortid.generate(), name: data.name};
    this.setState(({contacts}) => ({contacts: [...contacts, newContact]}));
  };

  render() {
    
    return (
      <>
        <ContactsForm onSubmit={this.addContact} />
      </>
    );
  }
};
