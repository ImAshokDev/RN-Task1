import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {navigationRef} from './NavProps';
import {getMyInfo, getMySignupStatus} from '../utils/localStorage';

import {AuthNavigator} from './AuthNavigation';
import {MainNavigator} from './StackNavigation';

import {setIsAuthenticated, setMySignup, setUserInfo} from '../store/userInfo';

export const AuthContext = React.createContext();

export function AppNavigations() {
  const dispatch = useDispatch();

  const {isAuthenticated} = useSelector(state => state.userInfo);

  async function callLocalStore() {
    const myInfo = await getMyInfo();
    const signupStatus = await getMySignupStatus();

    dispatch(setMySignup(signupStatus));

    if (myInfo) {
      dispatch(setUserInfo(myInfo));
      dispatch(setIsAuthenticated(true));
    }
  }

  useEffect(() => {
    callLocalStore();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated === true ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
