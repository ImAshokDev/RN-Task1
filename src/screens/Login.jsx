import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {TextField} from '../components/TextField';

export function Login() {
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
      passwordErr = 'Create password is required';
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
      console.log('validation done', values);
    } else {
      console.log('validation error.....', values);
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
            value={values.createPassword}
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
            <TouchableOpacity activeOpacity={0.4} style={styles.linkBtn}>
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
  },
  formView: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#000000',
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
    color: '#000000',
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
