/**
 * 2018-1-21 Zheng Kun
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Entypo';

export default class Self extends Component {
  static navigationOptions= {
    tabBarLabel: '我的',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'user' : 'user'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>nihao</Text>
      </View>
    );
  }
}
