import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import { DefaultInput } from './../UI/Inputs';

export default ({ placeName, placeNameChangedHandler}) => (
  <DefaultInput
    placeholder="Place name."
    value={placeName}
    onChangeText={placeNameChangedHandler}
  />
);
