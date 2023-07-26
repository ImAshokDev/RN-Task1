import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';

import {BottomTabs} from './BottomTabs';

const Stack = createStackNavigator();

export function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={BottomTabs} />
    </Stack.Navigator>
  );
}
