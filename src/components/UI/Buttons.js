import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const Button = ({ children, onPress, color }) => {
  const content = (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text> {children} </Text>
    </View>
  );
  if (Platform.OS === 'ios') {
    return (
      <TouchableNativeFeedback  onPress={onPress}>
        {content}
      </TouchableNativeFeedback>
    )
  }
  return (
    <TouchableOpacity onPress={onPress}>
      {content}
    </TouchableOpacity>
  );
}
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
