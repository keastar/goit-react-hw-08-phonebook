import React from 'react';
import css from './AppMenu.module.css';
import { useSelector } from 'react-redux';
// import { UseSelector } from 'react-redux';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth/selectors';
// import { useAuth } from 'hooks';

export const AppMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
