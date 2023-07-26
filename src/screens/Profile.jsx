import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {setIsAuthenticated, setUserInfo} from '../store/userInfo';

export function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {userInfo} = useSelector(state => state.userInfo);

  console.log('profile......userInfo.....', userInfo);

  const handleLogout = () => {
    dispatch(setUserInfo(null));
    dispatch(setIsAuthenticated(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.touchBtn}>
          <Text style={styles.text1}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.touchBtn}>
          <Text style={styles.text1}>Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleLogout}
          style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F5F9FB',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingVertical: 16,
  },

  // buttons

  touchBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  text1: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: 'bold',
  },

  logoutBtn: {
    width: '100%',
    backgroundColor: '#B91C1C',
    padding: 12,
    marginVertical: 16,
    // position: 'absolute',
    // bottom: 20,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
