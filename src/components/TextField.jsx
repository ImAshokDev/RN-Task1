import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export const TextField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  multiline,
  numberOfLines,
  inputHeight,
  errorLabel,
}) => {
  return (
    <View style={styles.inputView}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType ? keyboardType : 'default'}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor={'#64748B80'}
        style={[
          styles.inputStyle,
          {
            borderColor: errorLabel ? '#B91C1C' : '#E2E8F0',
            height: inputHeight,
          },
        ]}
      />

      {errorLabel ? <Text style={styles.errorLabel}>{errorLabel}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  inputStyle: {
    fontSize: 16,
    color: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    height: 100,
  },
  errorLabel: {
    fontSize: 14,
    color: '#B91C1C',
    marginTop: 2,
  },
});
