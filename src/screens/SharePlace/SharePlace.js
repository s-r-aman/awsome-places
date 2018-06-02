import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { DefaultInput } from './../../components/UI/Inputs';
import { Head1, TextMod } from './../../components/UI/Text';
import image from './../../assets/beautiful-place.jpg';
import { addPlace } from './../../store/actions/index.js';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigationEvent);
    this.state = {};
  }

  onNavigationEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({ side: 'right' });
      }
    }
  };

  placeAddHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <Head1 style={style.heading}>
            <TextMod>Share A Place With Us!</TextMod>
          </Head1>
          <View style={style.placeHolder}>
            <Image source={image} style={style.image} />
          </View>
          <View style={style.button}>
            <Button title="Pick Image" />
          </View>
          <View style={style.placeHolder}>
            <Text>Map Preview!</Text>
          </View>
          <View style={style.button}>
            <Button title="Locate Me" />
          </View>
          <DefaultInput placeholder="Place name." />
          <View style={style.button}>
            <Button title="Share the place." />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  placeHolder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    margin: 8
  },
  heading: {
    margin: 15
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName))
});

export default connect(undefined, mapDispatchToProps)(SharePlaceScreen);
