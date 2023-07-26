import React from 'react';
import {Alert} from 'react-native';

export const alertMessage = (text1, text2) => {
  Alert.alert(text1, text2, [
    // {
    //   text: 'Ask me later',
    //   onPress: () => console.log('Ask me later pressed'),
    // },
    // {
    //   text: 'Cancel',
    //   onPress: () => console.log('Cancel Pressed'),
    //   style: 'cancel',
    // },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

  //   const createTwoButtonAlert = () =>
  //     Alert.alert('Alert Title', 'My Alert Msg', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ]);
};
