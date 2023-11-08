import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';
import { Input, Text, Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Text
        as="b"
        fontSize="27px"
        fontFamily="Bello Pro"
        src="url('Bello-Pro.eot')"
        fontWeight="normal"
        fontStyle="normal"
        // fontFamily="Fits"
        // src="url('Fits-Heavy.eot')"
        // fontWeight="900"
        // fontStyle="normal"
        color="rgb(255, 255, 255)"
        mb="8px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Логинизация
      </Text>
      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        {/* <label className={css.label}> */}
        <Text fontSize="17px" marginTop="15px" mb="8px">
          Email:
        </Text>
        {/* Email: */}
        <Input
          placeholder="example@mail.com"
          variant="filled"
          size="md"
          type="email"
          name="email"
          value={email}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          autoComplete="off"
        />
        {/* </label> */}
        {/* <label className={css.label}> */}
        <Text fontSize="17px" marginTop="15px" mb="8px">
          Password:
        </Text>
        {/* Password: */}
        <Input
          placeholder="Enter 6 character or more"
          variant="filled"
          size="md"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        {/* </label> */}
        <Button
          display="flex"
          justifyContent="center"
          alignItems="center"
          type="submit"
          colorScheme="blue"
          size="md"
          height="35px"
          width="150px"
          margin="35px auto 56px"
          borderRadius="35px"
        >
          LogIn
        </Button>
      </form>
    </div>
  );
};
