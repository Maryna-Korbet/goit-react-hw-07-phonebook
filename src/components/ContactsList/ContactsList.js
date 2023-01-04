import css from "components/ContactsList/ContactsList.module.css";

function ContactList({ contacts, onDeleteContact }) {
    return (
        <>
            <ul className={css.list}>
                {contacts.map(({ id, name, number }) => (
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
        </>
    );
}

export default ContactList;