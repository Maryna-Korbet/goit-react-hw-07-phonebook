import { Component } from "react";
import PropTypes from 'prop-types';
import css from "components/ContactsForm/ContactsForm.module.css";

class ContactsForm extends Component {
    state = {
    name: '',
    number: '',
    };


    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.onReset();
    };

    onReset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
    return (
        <form action="submit" onSubmit={this.handleSubmit} className={css.form}>

            <label htmlFor="name" className={css.label}>
                <p className={css.title}>Name</p>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
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
                    value={this.state.number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            
            <button type="submit" className={css.button}>Add contact</button>
            </form>
    );
    }
}

    ContactsForm.prototypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;

