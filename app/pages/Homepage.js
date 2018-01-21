/**
 * 2018-1-17 Zheng Kun
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, Avatar, Header } from 'react-native-elements';

export default class Homepage extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Avatar
          small
          rounded
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Button
          title="heiheihei"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
