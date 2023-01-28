import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selector';
import css from "components/ContactsForm/ContactsForm.module.css";

export function ContactsForm () {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        contacts.some(contact => 
          contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)
          ? alert(`Such a name or number was added to the phone book earlier.`)
          : dispatch(addContact(name, number));
    
        onReset();
    };

    const onReset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form action="submit" onSubmit={handleSubmit} className={css.form}>
            <label htmlFor="name" className={css.label}>
                <p className={css.title}>Name</p>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            
            <label htmlFor="tel" className={css.label}>
                <p className={css.title}>Number</p>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            
            <button type="submit" className={css.button}>Add contact</button>
            </form>
    );
    }



