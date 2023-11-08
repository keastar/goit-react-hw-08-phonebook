import React from 'react';
import css from './ContactList.module.css';
import { Button } from '@chakra-ui/react';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilterContact } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterContact).toLowerCase();
  const dispatch = useDispatch();

  const handleDelete = event => {
    dispatch(deleteContact(event.target.id));
  };

  const getVisibleContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <form className={css.form}>
      {contacts && (
        <ul className={css.contactList}>
          {visibleContacts.map(({ id, name, number }) => (
            <li key={id} className={css.contactList_item}>
              <p>
                {name} {number}
              </p>
              <Button
                type="button"
                className={css.btn}
                id={id}
                onClick={handleDelete}
                colorScheme="blue"
                size="sm"
                height="30px"
                width="70px"
                borderRadius="35px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
