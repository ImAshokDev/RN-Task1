import React from 'react';

import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {AppNavigations} from './src/navigations/Index';
import {Provider} from 'react-redux';
import store from './src/store/store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Provider store={store}>
        <AppNavigations />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
