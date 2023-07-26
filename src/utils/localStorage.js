import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

// my Info Local DB
export const storeMyInfo = async value => {
  try {
    const stringified = JSON.stringify(value);
    await AsyncStorage.setItem('myInfo', stringified);
  } catch (e) {
    console.error('Unable to stored ' + 'myInfo');
  }
};

export const getMyInfo = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('myInfo');
    const parsedJson = jsonValue ? JSON.parse(jsonValue) : null;

    return parsedJson != null ? parsedJson : null;
  } catch (e) {
    // error reading value
  }
};

export const removeMyInfo = async () => {
  try {
    await AsyncStorage.removeItem('myInfo');
    console.log('removeMyInfo succcess');
    return true;
  } catch (e) {
    // error reading value
  }
};

// all userInfo Local DB
export const storeUserInfo = async value => {
  try {
    const jsonValue = await AsyncStorage.getItem('allUserInfo');
    let parsedJson = jsonValue ? JSON.parse(jsonValue) : [];

    if (parsedJson) {
      let prevFlag = false;
      for (let i = 0; i < parsedJson?.length; i++) {
        if (
          parsedJson[i]?.email?.toLowerCase() === value?.email?.toLowerCase()
        ) {
          prevFlag = true;
          Alert.alert(
            'Account exist with this E-mail, Signup with another E-mail ',
          );

          break;
        }
      }

      if (!prevFlag) {
        parsedJson = [...parsedJson, value];
        const stringified = JSON.stringify(parsedJson);

        await AsyncStorage.setItem('allUserInfo', stringified);
      }
    }
  } catch (e) {
    console.error('Unable to stored ' + 'allUserInfo');
  }
};

export const getUserInfo = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('allUserInfo');
    const parsedJson = jsonValue ? JSON.parse(jsonValue) : [];

    console.log('parsedJson.....get', parsedJson);
    return parsedJson != null ? parsedJson : [];
  } catch (e) {
    // error reading value
  }
};

// export const removeUserInfo = async () => {
//   try {
//     await AsyncStorage.removeItem('allUserInfo');
//     return true;
//   } catch (e) {
//     // error reading value
//   }
// };

// Signup Status Local DB

export const storeMySignupStatus = async value => {
  try {
    console.log('mySignupStatus...., ', value);

    await AsyncStorage.setItem('mySignupStatus', value);
  } catch (e) {
    console.error('Unable to stored ' + 'mySignupStatus');
  }
};

export const getMySignupStatus = async () => {
  try {
    const localSignupStatus = await AsyncStorage.getItem('mySignupStatus');
    console.log('localSignupStatus...., ', localSignupStatus);

    return localSignupStatus != null ? localSignupStatus : 'False';
  } catch (e) {
    // error reading value
  }
};

export const removeMySignupStatus = async () => {
  try {
    await AsyncStorage.removeItem('mySignupStatus');
    return true;
  } catch (e) {
    // error reading value
  }
};
