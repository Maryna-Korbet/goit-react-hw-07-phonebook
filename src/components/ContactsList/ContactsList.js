import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { deleteContact } from 'redux/contactsSlice';
import css from "components/ContactsList/ContactsList.module.css";

export function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
    );
    };
    const visibleContacts = getVisibleContacts();

    const onDeleteContact = id => dispatch(deleteContact(id));

    return (
            <ul className={css.list}>
                {visibleContacts.map(({ id, name, number }) => (
                    <li className={css.info} key={id}>
                        <p>{name}: {number}</p>
                        <button
                            className={css.button}
                            type="button"
                            onClick={() => onDeleteContact(id)}
                        >Delete</button>
                    </li>
                ))}
            </ul>
    );
}

