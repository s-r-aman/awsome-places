import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from './../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
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

  itemSelectHandler = key => {
    const setPlace = this.props.places.find(({ key: place }) => place === key);
    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: setPlace.name,
      passProps: {
        selectedPlace: setPlace
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ places: { places } }) => ({
  places
});

export default connect(mapStateToProps)(FindPlaceScreen);
