import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeHolder}>
          <Text>Map Preview!</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate Me" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    margin: 8
  },
  placeHolder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  }
});
