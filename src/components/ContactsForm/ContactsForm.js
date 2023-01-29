import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addСontact } from "redux/operations";
import css from "components/ContactsForm/ContactsForm.module.css";

export function ContactsForm () {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        contacts.some(contact => 
            contact.name.toLowerCase() === name.toLowerCase() || contact.phone === phone)
            ? alert(`Such a name or number was added to the phone book earlier.`)
            : dispatch(addСontact({name, phone}));
    
        onReset();
    };

    const onReset = () => {
        setName('');
        setPhone('');
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
                    name="phone"
                    value={phone}
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



