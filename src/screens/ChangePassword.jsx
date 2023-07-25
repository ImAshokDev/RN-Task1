import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {TextField} from '../components/TextField';

export function ChangePassword() {
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

  const onChange = (val, name) => {
    setValues({
      ...values,
      [name]: val,
    });
  };

  const isValidate = () => {
    let oldPasswordError = '';
    let newPasswordError = '';
    let confirmNewPassError = '';

    if (!values?.oldPassword) {
      oldPasswordError = 'Must not be Empty';
    }

    if (!values?.newPassword) {
      newPasswordError = 'Must not be Empty';
    }

    if (!values?.confirmNewPass) {
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
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
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
