import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const DefaultInput = ({ styles: extraStyles, placeholder, ...rest }) => (
  <TextInput
    placeholder={placeholder}
    style={[styles.input, extraStyles]}
    underlineColorAndroid="transparent"
    {...rest}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    margin: 10,
    lineHeight: 1.5
  }
});

export { DefaultInput };
