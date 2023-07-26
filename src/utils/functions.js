import React from 'react';
import {Alert} from 'react-native';

export const alertMessage = () => {
  Alert.alert('Login Success!', '', [
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
