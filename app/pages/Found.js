import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Found extends Component {
  static navigationOptions= {
    header: null,
    tabBarLabel: '发现',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'md-refresh-circle' : 'ios-stopwatch-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>发现</Text>
      </View>
    );
  }
}
