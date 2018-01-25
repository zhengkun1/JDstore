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
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Entypo';

import Serch from '../components/Serch';
import Scan from '../components/Scan';
import Navigationicon from '../components/Navigationicon';
import Carousel from '../components/HomeCarousel';

class Homepage extends Component {
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
      <View>
        <ScrollView>
          <Header
            leftComponent={<Scan />}
            centerComponent={<Serch />}
            rightComponent={<Scan />}
            outerContainerStyles={styles.outerheader}
            backgroundColor="white"
          />
          <Carousel />
          <Navigationicon />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerheader: {
    height: 50,
  },
});

export default Homepage;

