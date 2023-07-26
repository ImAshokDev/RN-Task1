import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Signup} from '../screens/Signup';
import {Login} from '../screens/Login';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export function AuthNavigator() {
  const {mySignup} = useSelector(state => state.userInfo);

  console.log('mySignup....', mySignup);

  return (
    <Stack.Navigator
      initialRouteName={mySignup !== 'True' ? 'Login' : 'Signup'}>
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
