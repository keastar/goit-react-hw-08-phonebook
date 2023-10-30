import React from 'react';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Container } from 'components/Container/Container';
// import { AppMenu } from './components/AppMenu/AppMenu';
// import Filter from '../Filter/Filter';
// import Form from './components/Form/Form';
// import ContactList from '../ContactList/ContactList';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { Navigation } from './components/Navigation/Navigation';
// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { authSelectors } from './redux/auth/selectors';

import { HomeView } from './views/HomeView';
import { LoginView } from './views/LoginView';
import { RegisterView } from './views/RegisterView';
import { ContactsView } from './views/ContactsView';
// import { AppMenu } from 'components/AppMenu/AppMenu';

// const HomeView = lazy(() => import('./views/HomeView'));
// const LoginView = lazy(() => import('./views/LoginView'));
// const RegisterView = lazy(() => import('./views/RegisterView'));
// const ContactsView = lazy(() => import('./views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(authSelectors.getIsRefreshing);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <b> Refresh user... </b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterView}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LoginView} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={<PrivateRoute redirectTo="/" component={ContactsView} />}
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
