import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selector';
import { setFilter } from 'redux/filterSlice';
import css from "components/Filter/Filter.module.css";

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

    return (
        <div>
            <p className={css.title}>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                value={filter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={onChangeFilter}
            />
        </div>
    );
};
