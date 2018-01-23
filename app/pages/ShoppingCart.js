import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Foundation';

export default class ShoppingCart extends Component {
  static navigationOptions= {
    tabBarLabel: '购物车',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'shopping-cart' : 'shopping-cart'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>购物车</Text>
      </View>
    );
  }
}
