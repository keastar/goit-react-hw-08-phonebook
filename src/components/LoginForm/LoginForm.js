import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';

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
      <h1>Логинизация</h1>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            // autoComplete="username"
          />
        </label>
        <label className={css.label}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            // autoComplete="current-password"
          />
        </label>
        <button type="submit" className={css.button}>
          LogIn
        </button>
      </form>
    </div>
  );
};
