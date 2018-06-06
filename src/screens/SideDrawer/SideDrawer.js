import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
class SideDrawer extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get('window').width * 0.8 }
        ]}
      >
        <TouchableOpacity>
          <View>
            <Icon name="ios-log-out-outline" size="30" color="#aaa" />
            <Text>Sign Out.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingTop: 22, backgroundColor: 'white', flex: 1 }
});

export default SideDrawer;
