import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {TextField} from '../components/TextField';

import {getUserInfo, storeMyInfo, storeUserInfo2} from '../utils/localStorage';

import {setUserInfo} from '../store/userInfo';

export function ChangePassword() {
  const dispatch = useDispatch();
  const initialState = {
    oldPassword: '',
    newPassword: '',
    confirmNewPass: '',
  };

  const initialErrorState = {
    oldPasswordErr: '',
    newPasswordErr: '',
    confirmNewPassErr: '',
  };

  const [values, setValues] = useState(initialState);
  const [errorValues, setErrorValues] = useState(initialErrorState);

  const {userInfo} = useSelector(state => state.userInfo);

  const onChange = (val, name) => {
    setValues({
      ...values,
      [name]: val,
    });
  };

  const toastMessage = () => {
    ToastAndroid.showWithGravity(
      'Password Changed Successfully!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    setErrorValues(initialErrorState);
    setValues(initialState);
  };

  const getFromLocal = async () => {
    try {
      const localUserArray = await getUserInfo();

      const userDetails = localUserArray.find(
        userObj =>
          userObj?.email.toLowerCase() === userInfo?.email.toLowerCase(),
      );

      if (userDetails) {
        const payload = {
          name: userInfo?.name,
          email: userInfo?.email,
          phoneNumber: userInfo?.phoneNumber,
          password: values?.newPassword,
        };

        dispatch(setUserInfo(payload));
        storeUserInfo2(payload);
        storeMyInfo(payload);
        toastMessage();
      }
    } catch (err) {
      console.log('local get error', err);
    }
  };

  const isValidate = () => {
    let oldPasswordError = '';
    let newPasswordError = '';
    let confirmNewPassError = '';

    if (values?.oldPassword) {
      if (userInfo?.password !== values?.oldPassword) {
        oldPasswordError = 'Current password does not match';
      }
    } else {
      oldPasswordError = 'Must not be Empty';
    }

    if (values?.newPassword) {
      if (values?.newPassword?.length < 8) {
        newPasswordError = `Must be atleast 8 characters!`;
      } else if (values?.newPassword === values?.oldPassword) {
        newPasswordError = `New password must be differ from old password`;
      }
    } else {
      newPasswordError = 'Must not be Empty';
    }

    if (values?.confirmNewPass) {
      if (values?.confirmNewPass?.length < 8) {
        confirmNewPassError = `Must be atleast 8 characters!`;
      } else if (values?.newPassword !== values?.confirmNewPass) {
        confirmNewPassError = `Password does not Match`;
      }
    } else {
      confirmNewPassError = 'Must not be Empty';
    }

    if (oldPasswordError || newPasswordError || confirmNewPassError) {
      setErrorValues({
        ...errorValues,
        oldPasswordErr: oldPasswordError,
        newPasswordErr: newPasswordError,
        confirmNewPassErr: confirmNewPassError,
      });
      return false;
    }

    setErrorValues(initialErrorState);
    return true;
  };

  const handleSubmit = () => {
    if (isValidate()) {
      getFromLocal();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.formView}>
          <TextField
            label={'Current Password'}
            placeholder="Current Password"
            value={values.oldPassword}
            onChangeText={val => onChange(val, 'oldPassword')}
            errorLabel={errorValues?.oldPasswordErr}
          />

          <TextField
            label={'New password'}
            placeholder="New password"
            value={values.newPassword}
            onChangeText={val => onChange(val, 'newPassword')}
            errorLabel={errorValues?.newPasswordErr}
          />

          <TextField
            label={'Confirm New password'}
            placeholder="Confirm New password"
            value={values.confirmNewPass}
            onChangeText={val => onChange(val, 'confirmNewPass')}
            errorLabel={errorValues?.confirmNewPassErr}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleSubmit}
            style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  formView: {
    paddingVertical: 20,
  },

  // buttons
  btn: {
    backgroundColor: '#525FE1',
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
