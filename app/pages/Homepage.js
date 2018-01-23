/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/17       Zheng Kun
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
