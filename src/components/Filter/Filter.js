import PropTypes from 'prop-types';
import css from "components/Filter/Filter.module.css";

const Filter = ({ value, onChange }) => {
    return (
        <div>
            <p className={css.title}>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                value={value}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={onChange}
            />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default Filter;