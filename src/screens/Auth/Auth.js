import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import { DefaultInput } from './../../components/UI/Inputs';
import { Head1 } from './../../components/UI/Text';
import startMainTabs from './../MainTabs/startMainTabs';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <Head1>Please Sign Up!</Head1>
        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder="Your E-mail address."
            style={styles.input}
          />
          <DefaultInput placeholder="Password" style={styles.input} />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
        </View>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    borderColor: 'black',
    backgroundColor: '#eee'
  }
});

export default AuthScreen;
