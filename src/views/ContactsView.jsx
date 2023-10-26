import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Helmet } from 'react-helmet';
import Form from '../components/Form/Form';
import { fetchContacts } from '../redux/contacts/operations';
// import { selectIsLoading } from '../redux/contacts/selectors';
import ContactList from '../components/ContactList/ContactList';

export const ContactsView = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Your contacts</title>
      </Helmet> */}
      <Form />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <ContactList />
    </>
  );
};
