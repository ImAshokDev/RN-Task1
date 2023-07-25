import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './NavProps';

import {AuthNavigator} from './AuthNavigation';
import {BottomTabs} from './StackNavigation';

export const AuthContext = React.createContext();

export function AppNavigations() {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {isAuthenticated === false ? <BottomTabs /> : <AuthNavigator />} */}

      <BottomTabs />
    </NavigationContainer>
  );
}
