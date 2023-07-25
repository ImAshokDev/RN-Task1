import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import {HomeScreen} from '../screens/Home';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000'}}>Profile </Text>
    </View>
  );
}

function PasswordChange() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000'}}>Home screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
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

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
