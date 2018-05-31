import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Head1 = ({ children, style: extraStyles, ...rest }) => (
  <Text {...rest} style={[styles.head1, extraStyles]}>
    {children}
  </Text>
);

const TextMod = ({ children, style: extraStyles, ...rest }) => (
  <Text {...rest} style={[styles.text, extraStyles]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  head1: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    color: '#bbb',
    backgroundColor: 'transparent'
  }
});

export { Head1, TextMod };
