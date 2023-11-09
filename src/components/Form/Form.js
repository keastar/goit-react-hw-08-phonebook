import React from 'react';
import css from './Form.module.css';
import { Input, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert('Already exist contact');
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name:
        <Input
          placeholder="Enter your Name"
          size="sm"
          variant="flushed"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.label_input}
        />
      </label>
      <label className={css.label}>
        tel:
        <Input
          placeholder="Enter your number"
          size="sm"
          variant="flushed"
          type="tel"
          name="number"
          className={css.label_input}
        />
      </label>
      <Button
        type="submit"
        color="rgb(68, 68, 68)"
        backgroundColor="rgb(255, 255, 255)"
        size="md"
        height="35px"
        width="150px"
        margin="14px auto 16px"
        borderRadius="35px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Add contact
      </Button>
    </form>
  );
};
