import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {navigationRef} from './NavProps';
import {getMyInfo, getMySignupStatus, getUserInfo} from '../utils/localStorage';

import {AuthNavigator} from './AuthNavigation';
import {MainNavigator} from './StackNavigation';

import {setIsAuthenticated, setMySignup, setUserInfo} from '../store/userInfo';

export const AuthContext = React.createContext();

export function AppNavigations() {
  const dispatch = useDispatch();

  const {isAuthenticated} = useSelector(state => state.userInfo);

  console.log('isAuthenticated.....', isAuthenticated);

  async function callLocalStore() {
    const myInfo = await getMyInfo();
    const signupStatus = await getMySignupStatus();

    dispatch(setMySignup(signupStatus));

    if (myInfo) {
      console.log('caaled....2', myInfo, signupStatus);
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