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
 *     Initial: 2018/01/17        Zheng Kun
 */

import { TabNavigator } from 'react-navigation';

import Homepage from './pages/Homepage';
import Self from './pages/Self';
import Found from './pages/Found';
import Classify from './pages/Classify';
import ShoppingCart from './pages/ShoppingCart';

const Tabs = TabNavigator({
  HOME: {
    screen: Homepage,
  },
  Classify: {
    screen: Classify,
  },
  Found: {
    screen: Found,
  },
  ShoppingCart: {
    screen: ShoppingCart,
  },
  Self: {
    screen: Self,
  },
}, {
  tabBarPosition: 'bottom',
  style: {
    backgroundColor: 'white',
  },
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'red',
    inactiveTintColor: 'black',
    style: {
      backgroundColor: 'white',
    },
    labelStyle: {
      fontSize: 10,
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
      marginTop: 0,
    },
  },
});

const Navigations = {
  Main: { screen: Tabs },
};

export default Navigations;
