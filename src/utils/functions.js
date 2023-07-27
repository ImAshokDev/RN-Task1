import React from 'react';
import {Alert} from 'react-native';

export const alertMessage = (text1, text2) => {
  Alert.alert(text1, text2, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};
