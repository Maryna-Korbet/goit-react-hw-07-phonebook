import { useState } from "react";
import PropTypes from 'prop-types';
import css from "components/ContactsForm/ContactsForm.module.css";

export default function ContactsForm ({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

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
        onSubmit({name, number});
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

    ContactsForm.prototypes = {
        handleSubmit: PropTypes.func,
};

