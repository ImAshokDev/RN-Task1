import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';

import {HomeScreen} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {ChangePassword} from '../screens/ChangePassword';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function ProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

export function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      //  screenOptions={{headerShown: false}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({color, focused}) => (
        //     <Entypo name={'home'} />
        //   ),
        // }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
