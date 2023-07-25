import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './NavProps';

import {AuthNavigator} from './AuthNavigation';
import {BottomTabs} from './StackNavigation';

export const AuthContext = React.createContext();

export function AppNavigations() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated === true ? <BottomTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
