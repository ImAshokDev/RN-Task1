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

import {
  storeMyInfo,
  storeMySignupStatus,
  storeUserInfo,
} from '../utils/localStorage';
import {setIsAuthenticated, setMySignup, setUserInfo} from '../store/userInfo';

export function Signup() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
    createPassword: '',
    confirmPassword: '',
  };

  const initialErrorState = {
    nameError: '',
    emailError: '',
    phoneNumberError: '',
    createPasswordError: '',
    confirmPasswordError: '',
  };

  const [values, setValues] = useState(initialState);
  const [errorValues, setErrorValues] = useState(initialErrorState);

  const onChange = (val, name) => {
    setValues({
      ...values,
      [name]: val,
    });
  };

  const isValidate = () => {
    let nameErr = '';
    let emailErr = '';
    let phoneNumberErr = '';
    let createPasswordErr = '';
    let confirmPasswordErr = '';

    if (!values?.name) {
      nameErr = 'Name is required';
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (values?.email) {
      if (reg.test(values?.email) === false) {
        emailErr = 'Invalid E-mail';
      }
    } else {
      emailErr = 'E-mail is required';
    }

    const numberPattern = new RegExp(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
    );

    if (values?.phoneNumber) {
      if (!numberPattern.test(values?.phoneNumber)) {
        phoneNumberErr = 'Enter valid phone number';
      }
    } else {
      phoneNumberErr = 'Phone Number is required';
    }

    if (values?.createPassword) {
      if (values?.createPassword?.length < 8) {
        createPasswordErr = `Must be atleast 8 characters!`;
      }
    } else {
      createPasswordErr = 'Create password is required';
    }

    if (values?.confirmPassword) {
      if (values?.confirmPassword?.length < 8) {
        confirmPasswordErr = `Must be atleast 8 characters!`;
      } else if (values?.createPassword !== values?.confirmPassword) {
        confirmPasswordErr = `Password does not Match`;
      }
    } else {
      confirmPasswordErr = 'Confirm password is required';
    }

    if (
      nameErr ||
      emailErr ||
      phoneNumberErr ||
      createPasswordErr ||
      confirmPasswordErr
    ) {
      setErrorValues({
        ...errorValues,
        nameError: nameErr,
        emailError: emailErr,
        phoneNumberError: phoneNumberErr,
        createPasswordError: createPasswordErr,
        confirmPasswordError: confirmPasswordErr,
      });
      return false;
    }

    setErrorValues(initialErrorState);
    return true;
  };

  const toastMessage = () => {
    ToastAndroid.showWithGravity(
      'Signup Successful!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    setValues(initialState);
  };

  const handleSubmit = async () => {
    if (isValidate()) {
      const payload = {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.createPassword,
      };

      const returnValue = await storeUserInfo(payload);

      if (returnValue) {
        dispatch(setUserInfo(payload));
        dispatch(setIsAuthenticated(true));
        dispatch(setMySignup('True'));

        storeMySignupStatus('True');
        storeMyInfo(payload);
        toastMessage();
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.formView}>
          <Text style={styles.title}>Signup</Text>

          <TextField
            label={'Name'}
            placeholder="Enter your Name"
            value={values.name}
            onChangeText={val => onChange(val, 'name')}
            errorLabel={errorValues?.nameError}
          />
          <TextField
            label={'E-mail'}
            placeholder="Enter your E-mail"
            value={values.email}
            onChangeText={val => onChange(val, 'email')}
            errorLabel={errorValues?.emailError}
          />
          <TextField
            label={'Phone Number'}
            placeholder="Enter Phone Number"
            keyboardType={'number-pad'}
            value={values.phoneNumber}
            onChangeText={val => onChange(val, 'phoneNumber')}
            errorLabel={errorValues?.phoneNumberError}
          />
          <TextField
            label={'Create password'}
            placeholder="Must be 8 characters or more"
            value={values.createPassword}
            onChangeText={val => onChange(val, 'createPassword')}
            errorLabel={errorValues?.createPasswordError}
          />
          <TextField
            label={'Confirm password'}
            placeholder="Must be 8 characters or more"
            value={values.confirmPassword}
            onChangeText={val => onChange(val, 'confirmPassword')}
            errorLabel={errorValues?.confirmPasswordError}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleSubmit}
            style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.infoView}>
            <Text style={styles.text1}>Already have an account?</Text>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate('Login')}
              style={styles.linkBtn}>
              <Text style={styles.linkBtnText}>Login</Text>
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
