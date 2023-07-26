import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {setIsAuthenticated, setUserInfo} from '../store/userInfo';

import {removeMyInfo} from '../utils/localStorage';

export function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {userInfo} = useSelector(state => state.userInfo);

  const toastMessage = () => {
    ToastAndroid.showWithGravity(
      'Logout Successful!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const handleLogout = () => {
    dispatch(setUserInfo(null));
    dispatch(setIsAuthenticated(false));
    removeMyInfo();
    toastMessage();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.touchBtn, {backgroundColor: '#FFD89C'}]}>
          <Text style={styles.title}>UserDetails: </Text>
          <Text style={[styles.text1, {textTransform: 'capitalize'}]}>
            Name: {userInfo?.name}
          </Text>
          <Text style={[styles.text1]}>
            E-mail:{' '}
            <Text style={[{textTransform: 'lowercase'}]}>
              {userInfo?.email}
            </Text>
          </Text>
          <Text style={styles.text1}>
            Phone Number: {userInfo?.phoneNumber}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.touchBtn}>
          <Text style={styles.text1}>Change Password</Text>
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

  // profileView
  title: {
    fontSize: 18,
    color: '#1E293B',
    fontWeight: 'bold',
    marginBottom: 10,
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
