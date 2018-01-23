/**
 * 2018-1-17 Zheng Kun
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, Avatar, Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Entypo';

export default class Homepage extends Component {
  static navigationOptions= {
    header: null,
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'home' : 'home'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
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
          title="this is K"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
