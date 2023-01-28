import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { ContactList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";

export function App () {
  return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm />

        <h2>Contacts</h2>
        <Filter />
        
        <ContactList />
      </div>
    );
  }
