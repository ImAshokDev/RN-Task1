import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function Home() {
  const initialState = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formView}>
        <Text style={styles.title}>Home Screen</Text>
      </View>
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
    marginTop: 50,
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
