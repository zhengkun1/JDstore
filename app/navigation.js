/**
 * 2018-1-17 Zheng Kun
 */

import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Homepage from './pages/Homepage';
import Self from './pages/Self';
import Found from './pages/Found';
import Classify from './pages/Classify';
import ShoppingCart from './pages/ShoppingCart';

const Tabs = TabNavigator({
  HOME: {
    screen: Homepage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'android' : 'android-studio'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Classify: {
    screen: Classify,
    navigationOptions: {
      tabBarLabel: '分类',
    },
  },
  Found: {
    screen: Found,
    navigationOptions: {
      tabBarLabel: '发现',
    },
  },
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: {
      tabBarLabel: '购物车',
    },
  },
  Self: {
    screen: Self,
    navigationOptions: {
      tabBarLabel: '我的',
    },
  },
}, {
  tabBarPosition: 'bottom',
  style: {
    backgroundColor: 'white',
  },
  swipeEnabled: false,
  labelStyle: {
    backgroundColor: 'white',
  },
  tabBarOptions: {
    style: {
      backgroundColor: 'white',
    },
    labelStyle: {
      color: 'black',
    },
  },
});

const Navigations = {
  Main: { screen: Tabs },
};

export default Navigations;
