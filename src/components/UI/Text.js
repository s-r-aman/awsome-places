import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Head1 = ({ children, styles: extraStyles, ...rest }) => (
  <Text {...rest} style={[styles.head1, extraStyles]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  head1: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export { Head1 };
