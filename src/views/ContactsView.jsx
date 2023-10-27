import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import { Form } from '../components/Form/Form';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import { ContactList } from '../components/ContactList/ContactList';

export const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
};
