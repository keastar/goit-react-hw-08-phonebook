import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch } from 'react-redux';
import { Input } from '@chakra-ui/react';
// import { selectFilterContact } from 'redux/selectors';
import { setFilterContacts } from '../../redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectFilterContact);

  const handleFilter = event => {
    dispatch(setFilterContacts(event.target.value));
  };

  return (
    <label className={css.contactList_item_label}>
      Фильтр по имени:{' '}
      {/* <input type="text" name="filter" onChange={handleFilter} /> */}
      <Input
        // placeholder="Enter your number"
        size="md"
        variant="outline"
        backgroundColor="white"
        type="text"
        name="filter"
        // className={css.label_input}
        onChange={handleFilter}
      />
    </label>
  );
};

export default Filter;
