import { Component } from "react";
import { Formik, Form } from 'formik';
import css from "components/ContactsForm/ContactsForm.module.css";

class ContactsForm extends Component {
    state = {
        name: '',
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

    onReset = e => {
        this.setState({ name: '' });
    };

render() {
    return (
        <Formik>
            <Form action="submit" onSubmit={this.handleSubmit} className={css.form}>
                <label htmlFor="name" className={css.label}>
                    <p className={css.title}>Name</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit" className={css.button}> Add contact</button>
            </Form>
        </Formik>
    );
    }
}

export default ContactsForm;

