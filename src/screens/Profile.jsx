import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.5} style={styles.touchBtn}>
          <Text style={styles.text1}>Password Change</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.touchBtn}>
          <Text style={styles.text1}>Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.logoutBtn}>
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
