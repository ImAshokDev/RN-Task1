import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#2C3333" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
