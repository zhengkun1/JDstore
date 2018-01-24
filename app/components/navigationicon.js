import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Navigationicon extends Component {
  render() {
    return (
      <View>
        <Button
          buttonStyle={style.button}
          title=""
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  button: {
    height: 25,
    width: 25,
    borderRadius: 5,
  },
});
