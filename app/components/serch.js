import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Serch extends Component {
  render() {
    return (
      <Button
        buttonStyle={styles.button}
        color="white"
        title="点击这里进行搜索"
        textStyle={styles.text}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: "100%",
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
  },
  text: {
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
