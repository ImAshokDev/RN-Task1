import AsyncStorage from '@react-native-async-storage/async-storage';

import {alertMessage} from './functions';

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
      let oldUserFlag = false;
      for (let i = 0; i < parsedJson?.length; i++) {
        if (
          parsedJson[i]?.email?.toLowerCase() === value?.email?.toLowerCase()
        ) {
          oldUserFlag = true;
          alertMessage(
            'This email address already exists',
            'Signup with another email address',
          );
          return false;
        }
      }

      if (!oldUserFlag) {
        parsedJson = [...parsedJson, value];
        const stringified = JSON.stringify(parsedJson);

        await AsyncStorage.setItem('allUserInfo', stringified);

        return true;
      }
    }
  } catch (e) {
    console.error('Unable to stored ' + 'allUserInfo');
  }
};

export const storeUserInfo2 = async value => {
  try {
    const jsonValue = await AsyncStorage.getItem('allUserInfo');
    let parsedJson = jsonValue ? JSON.parse(jsonValue) : [];

    if (parsedJson) {
      for (let i = 0; i < parsedJson?.length; i++) {
        if (
          parsedJson[i]?.email?.toLowerCase() === value?.email?.toLowerCase()
        ) {
          parsedJson[i] = {
            ...parsedJson[i],
            password: value?.password,
          };

          break;
        }
      }

      const stringified = JSON.stringify(parsedJson);

      await AsyncStorage.setItem('allUserInfo', stringified);
    }
  } catch (e) {
    console.error('Unable to stored ' + 'allUserInfo');
  }
};

export const getUserInfo = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('allUserInfo');
    const parsedJson = jsonValue ? JSON.parse(jsonValue) : [];

    return parsedJson != null ? parsedJson : [];
  } catch (e) {
    // error reading value
  }
};

// Signup Status Local DB

export const storeMySignupStatus = async value => {
  try {
    await AsyncStorage.setItem('mySignupStatus', value);
  } catch (e) {
    console.error('Unable to stored ' + 'mySignupStatus');
  }
};

export const getMySignupStatus = async () => {
  try {
    const localSignupStatus = await AsyncStorage.getItem('mySignupStatus');
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
