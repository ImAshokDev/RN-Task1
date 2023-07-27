import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {navigationRef} from './NavProps';
import {getMyInfo, getMySignupStatus} from '../utils/localStorage';

import {AuthNavigator} from './AuthNavigation';
import {MainNavigator} from './StackNavigation';

import {setIsAuthenticated, setMySignup, setUserInfo} from '../store/userInfo';
import {LoadingIndicator} from '../components/LoadingIndicator';

export const AuthContext = React.createContext();

export function AppNavigations() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const {isAuthenticated} = useSelector(state => state.userInfo);

  // my profile info get from localDB and setting in redux store
  async function callLocalStore() {
    const myInfo = await getMyInfo();
    const signupStatus = await getMySignupStatus();

    dispatch(setMySignup(signupStatus));

    if (myInfo) {
      dispatch(setUserInfo(myInfo));
      dispatch(setIsAuthenticated(true));
    }

    setLoading(false);
  }

  useEffect(() => {
    callLocalStore();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>{isAuthenticated === true ? <MainNavigator /> : <AuthNavigator />}</>
      )}
    </NavigationContainer>
  );
}
