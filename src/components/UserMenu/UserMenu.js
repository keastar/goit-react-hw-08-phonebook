import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Hey, {name}</p>
      <button
        type="button"
        className={css.link}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
