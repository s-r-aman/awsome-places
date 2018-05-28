import React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from './../../store/actions/index';

const placeDetail = ({
  navigator,
  deleteItem,
  selectedPlace: { image, name, key }
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.placeImage} />
        <Text>{name}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            deleteItem(key);
            navigator.pop();
          }}
        >
          <View style={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
        {/* <Button title="Close" onPress={props.onModalClosed} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
});

const mapDispatchToProps = dispatch => ({
  deleteItem: key => dispatch(deletePlace(key))
});

export default connect(undefined, mapDispatchToProps)(placeDetail);
