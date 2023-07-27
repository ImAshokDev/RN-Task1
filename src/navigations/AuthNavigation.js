import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {Signup} from '../screens/Signup';
import {Login} from '../screens/Login';

const Stack = createStackNavigator();

export function AuthNavigator() {
  const {mySignup} = useSelector(state => state.userInfo);

  return (
    <Stack.Navigator
      initialRouteName={mySignup === 'True' ? 'Login' : 'Signup'}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
