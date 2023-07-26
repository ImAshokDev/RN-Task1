import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {TextField} from '../components/TextField';

import {getUserInfo, storeMyInfo} from '../utils/localStorage';

import {setIsAuthenticated, setUserInfo} from '../store/userInfo';

export function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: '',
  };

  const initialErrorState = {
    emailError: '',
    passwordError: '',
  };

  const [values, setValues] = useState(initialState);
  const [errorValues, setErrorValues] = useState(initialErrorState);

  const onChange = (val, name) => {
    setValues({
      ...values,
      [name]: val,
    });
  };

  const toastMessage = () => {
    ToastAndroid.showWithGravity(
      'Login Successful!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );

    setValues(initialState);
    setErrorValues(initialErrorState);
  };

  const getFromLocal = async () => {
    setErrorValues(initialErrorState);

    try {
      const localUserArray = await getUserInfo();

      const userDetails = localUserArray.find(
        userObj => userObj?.email.toLowerCase() === values.email.toLowerCase(),
      );

      if (userDetails) {
        if (userDetails?.password === values.password) {
          dispatch(setUserInfo(userDetails));
          dispatch(setIsAuthenticated(true));
          storeMyInfo(userDetails);
          toastMessage();
        } else {
          setErrorValues({
            ...errorValues,
            passwordError: `Incorrect Password`,
          });
        }
      }

      if (!userDetails) {
        setErrorValues({
          ...errorValues,
          emailError: `E-mail does not exist`,
        });
      }
    } catch (err) {
      console.log('local get error', err);
    }
  };

  const isValidate = () => {
    let emailErr = '';
    let passwordErr = '';

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (values?.email) {
      if (reg.test(values?.email) === false) {
        emailErr = 'Invalid E-mail';
      }
    } else {
      emailErr = 'E-mail is required';
    }

    if (!values?.password) {
      passwordErr = 'Password is required';
    }

    if (emailErr || passwordErr) {
      setErrorValues({
        ...errorValues,
        emailError: emailErr,
        passwordError: passwordErr,
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
          <Text style={styles.title}>Login</Text>

          <TextField
            label={'E-mail'}
            placeholder="Enter your E-mail"
            value={values.email}
            onChangeText={val => onChange(val, 'email')}
            errorLabel={errorValues?.emailError}
          />

          <TextField
            label={'Enter password'}
            placeholder="Enter password"
            value={values.password}
            onChangeText={val => onChange(val, 'password')}
            errorLabel={errorValues?.passwordError}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleSubmit}
            style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.infoView}>
            <Text style={styles.text1}>Create New Account?</Text>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate('Signup')}
              style={styles.linkBtn}>
              <Text style={styles.linkBtnText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // backgroundColor: 'pink',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  formView: {
    paddingVertical: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: '#1E293B',
    fontWeight: 'bold',
    marginVertical: 20,
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

  infoView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text1: {
    fontSize: 16,
    color: '#1E293B',
  },
  linkBtn: {
    marginLeft: 10,
  },

  linkBtnText: {
    fontSize: 18,
    color: '#0079FF',
    fontWeight: 'bold',
  },
});
