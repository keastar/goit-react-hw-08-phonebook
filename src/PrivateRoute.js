import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from './redux/auth/selectors';

// export const PrivateRoute = ({ children, ...routeProps }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
// const { isRefreshing } = useSelector(authSelectors.getIsRefreshing);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to="/login" />}
//     </Route>
//   );
// };

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(authSelectors.getIsLoggedIn);
  const { isRefreshing } = useSelector(authSelectors.getIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
