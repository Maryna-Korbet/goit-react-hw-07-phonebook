import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selector';
import { deleteContact } from 'redux/operations';
import css from "components/ContactsList/ContactsList.module.css";

export function ContactList() {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();

    const onDeleteContact = id => dispatch(deleteContact(id));

    return (
            <ul className={css.list}>
                {contacts.map(({ id, name, phone }) => (
                    <li className={css.info} key={id}>
                        <p>{name}: {phone}</p>
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



