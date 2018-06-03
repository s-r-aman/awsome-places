import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import { DefaultInput } from './../UI/Inputs';
class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <DefaultInput
        placeholder="Place name."
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
      />
    );
  }
}

export default PlaceInput;
