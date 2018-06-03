import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Button } from 'react-native';
import image from './../../assets/beautiful-place.jpg';

export default class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeHolder}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={() => alert('Pick Image')} />
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
  },
  image: {
    height: '100%',
    width: '100%'
  }
});
