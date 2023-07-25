import React from 'react';

import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{color: '#000'}}>App.tsx</Text>
    </SafeAreaView>
  );
}

export default App;
