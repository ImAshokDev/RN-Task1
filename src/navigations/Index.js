import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {navigationRef} from './NavProps';

import {AuthNavigator} from './AuthNavigation';
import {MainNavigator} from './StackNavigation';

export const AuthContext = React.createContext();

export function AppNavigations() {
  const {isAuthenticated} = useSelector(state => state.userInfo);

  console.log('isAuthenticated........', isAuthenticated);

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated === true ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
