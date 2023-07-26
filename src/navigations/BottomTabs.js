import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import homeIcon from '../assets/imges/home.png';
import profileIcon from '../assets/imges/profile.png';

import {HomeScreen} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {ChangePassword} from '../screens/ChangePassword';
import {Image, Text, View} from 'react-native';
import {TopNavHeaderTitle} from '../components/Navigations';

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
          headerLeft: () => (
            <TopNavHeaderTitle title={'Profile'} paddingLeft={20} />
          ),

          headerTitle: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff',
            borderBottomWidth: 2,
            borderBottomColor: '#DBDBDB',
          },
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: true,
          // headerLeft: () => <TopNavHeaderTitle title={'Profile'} />,

          headerTitle: () => <TopNavHeaderTitle title={'Change Password'} />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff',
            borderBottomWidth: 2,
            borderBottomColor: '#DBDBDB',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E293B',
        tabBarInactiveTintColor: '#64748B',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 56,

          elevation: 4,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                // width: (100),
                alignItems: 'center',
              }}>
              <Image source={homeIcon} style={{width: 24, height: 24}} />
              <Text
                style={{
                  color: color,
                  fontSize: 12,
                  lineHeight: 16,
                  textAlign: 'center',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                // width: (100),
                alignItems: 'center',
              }}>
              <Image source={profileIcon} style={{width: 24, height: 24}} />
              <Text
                style={{
                  color: color,
                  fontSize: 12,
                  lineHeight: 16,
                  textAlign: 'center',
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
