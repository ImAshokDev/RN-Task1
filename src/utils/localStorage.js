import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserInfo = async value => {
  try {
    const jsonValue = await AsyncStorage.getItem('allUserInfo');
    let parsedJson = jsonValue ? JSON.parse(jsonValue) : [];

    console.log('jsonValue...., ', parsedJson, value);

    parsedJson = [...parsedJson, value];

    console.log('jsonValue....,2 ', parsedJson);

    const stringified = JSON.stringify(parsedJson);

    console.log('jsonValue....3 ', stringified);

    // await AsyncStorage.setItem('allUserInfo', stringified);
  } catch (e) {
    console.error('Unable to stored ' + 'allUserInfo');
  }
};

// const getUserInfo = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('allUserInfo');
//     // console.log('jsonValue...., ', jsonValue);
//     const parsedJson = jsonValue ? JSON.parse(jsonValue) : null;

//     // console.log('parsedJson.....', parsedJson);
//     return parsedJson != null ? parsedJson?.accessToken : null;
//   } catch (e) {
//     // error reading value
//   }
// };

// const removeUserInfo = async () => {
//   try {
//     await AsyncStorage.removeItem('allUserInfo');
//     return true;
//   } catch (e) {
//     // error reading value
//   }
// };
