import React from 'react';
import {Text} from 'react-native';

export const TopNavHeaderTitle = ({title, paddingLeft}) => {
  return (
    <Text
      style={{
        fontSize: 20,
        color: '#1E293B',
        paddingLeft: paddingLeft ?? 0,
      }}>
      {title}
    </Text>
  );
};
