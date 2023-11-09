import React from 'react';
import { Suspense } from 'react';
import { AppMenu } from '../AppMenu/AppMenu';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
// import { Spinner } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div className={css.Container}>
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
