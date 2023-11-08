import React from 'react';
// import css from './AppMenu.module.css';
import { useSelector } from 'react-redux';
// import { UseSelector } from 'react-redux';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth/selectors';
import { Heading, Flex, Spacer, Box } from '@chakra-ui/react';
// import { useAuth } from 'hooks';

export const AppMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Heading
      as="h4"
      size="md"
      display="flex"
      alignItems="center"
      marginBottom="16px"
      borderBottom="1px solid rgba(0,0,0, .35)"
    >
      <Flex align="center">
        <Box w="290px">
          <Navigation />
        </Box>
        <Spacer />
        <Box w="168px">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Flex>
    </Heading>
  );
};
