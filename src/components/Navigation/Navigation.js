import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link_h} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link_c} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
