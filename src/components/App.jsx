import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { ContactList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { selectError, selectIsLoading } from "redux/selector";

export function App () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm />

        {isLoading && !error && <b>Request in progress...</b>}

        <h2>Contacts</h2>
        <Filter />
        
        <ContactList />
      </div>
    );
  }
