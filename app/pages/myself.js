/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  // Platform,
  StyleSheet,
  // Text,
  View,
} from 'react-native';
import { Button, Avatar } from 'react-native-elements';

export default class Main extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          small
          rounded
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Button
          title="hahahha"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
