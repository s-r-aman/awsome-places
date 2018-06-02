import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { DefaultInput } from './../../components/UI/Inputs';
import { Head1, TextMod } from './../../components/UI/Text';
import { Button } from './../../components/UI/Buttons';
import startMainTabs from './../MainTabs/startMainTabs';
import image from './../../assets/pexels-photo-556666.jpeg';

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
      <ImageBackground source={image} style={styles.bgImage}>
        <View style={styles.container}>
          <TextMod>
            <Head1>Please Sign Up!</Head1>
          </TextMod>
          <Button color="#29aff4" onPress={() => alert('EFFEN Kidden')}>
            Switch to Login!
          </Button>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your E-mail address."
              style={styles.input}
            />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
          </View>
          <Button color="#29aff4" onPress={this.loginHandler}>
            Login
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    flex: 1
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
