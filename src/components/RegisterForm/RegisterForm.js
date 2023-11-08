import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import css from './RegisterForm.module.css';
import { register } from '../../redux/auth/operations';
import { Input, Text, Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [value, setValue] = useState('');
  // const handleChange = event => setValue(event.target.value);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Text
        as="b"
        fontSize="27px"
        mb="8px"
        fontFamily="Bello Pro"
        src="url('Bello-Pro.eot')"
        fontWeight="normal"
        fontStyle="normal"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="rgb(255, 255, 255)"
      >
        Регистрация
      </Text>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        {/* <label className={css.label}> */}
        <Text fontSize="17px" marginTop="15px" mb="8px">
          Your name:
        </Text>
        {/* Username */}
        <Input
          placeholder="Enter your name"
          variant="filled"
          type="text"
          name="name"
          value={name}
          size="md"
          onChange={handleChange}
          autoComplete="off"
        />
        {/* </label> */}
        {/* <label className={css.label}> */}
        <Text fontSize="17px" marginTop="15px" mb="8px">
          Email:
        </Text>
        {/* Email */}
        <Input
          placeholder="example@mail.com"
          variant="filled"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
        />
        {/* </label> */}
        {/* <label className={css.label}> */}
        <Text fontSize="17px" marginTop="15px" mb="8px">
          Password:
        </Text>
        {/* Password */}
        <Input
          placeholder="Enter 6 character or more"
          variant="filled"
          type="password"
          name="password"
          value={password}
          size="md"
          onChange={handleChange}
          autoComplete="off"
        />
        {/* </label> */}
        <Button
          type="submit"
          colorScheme="blue"
          size="md"
          height="35px"
          width="150px"
          margin="35px auto 56px"
          borderRadius="35px"
          display="flex"
          justifyContent="center"
          alignItems="center"

          // marginBottom="16px"
          // className={css.button}
        >
          Register
        </Button>
      </form>
    </div>
  );
};
