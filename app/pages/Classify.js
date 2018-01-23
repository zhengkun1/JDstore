import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Entypo';

export default class Classify extends Component {
  static navigationOptions= {
    header: null,
    tabBarLabel: '分类',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'list' : 'list'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>分类</Text>
      </View>
    );
  }
}
