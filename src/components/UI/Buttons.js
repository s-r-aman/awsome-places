import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress, color }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text> {children} </Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black'
  }
});

export { Button };
