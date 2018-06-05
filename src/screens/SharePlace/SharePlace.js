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
import PlaceInput from './../../components/PlaceInput/PlaceInput';
import PickImage from './../../components/PickImage/PickImage';
import PickLocation from './../../components/PickLocation/PickLocation';
import { Head1, TextMod } from './../../components/UI/Text';
import { addPlace } from './../../store/actions/index.js';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigationEvent);
    this.state = {
      placeName: ''
    };
  }

  onNavigationEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({ side: 'right' });
      }
    }
  };

  placeNameChangedHandler = val => {
    this.setState(() => ({
      placeName: val
    }))
  };

  placeAddHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.props.onAddPlace(this.state.placeName);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={style.container}>
          <Head1 style={style.heading}>
            <TextMod>Share A Place With Us!</TextMod>
          </Head1>
          <PickImage />
          <PickLocation />
          <PlaceInput placeName={this.state.placeName} />
          <View style={style.button}>
            <Button title="Share the place." onPress={this.placeAddHandler} />
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

export default connect(
  undefined,
  mapDispatchToProps
)(SharePlaceScreen);
