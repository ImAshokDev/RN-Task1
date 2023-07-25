import React from 'react';

import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Signup} from './src/screens/Signup';
import {Login} from './src/screens/Login';
import {AppNavigations} from './src/navigations/Index';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Text style={{color: '#000'}}>Home Screen</Text> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <AppNavigations />
    </SafeAreaView>
  );
}

export default App;
