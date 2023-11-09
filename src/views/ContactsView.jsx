import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../components/ContactList/ContactList.module.css';
import { Form } from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import { ContactList } from '../components/ContactList/ContactList';
import { Spinner } from '@chakra-ui/react';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <Filter />
      <div className={css.contactList_item_label_spin}>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
}
