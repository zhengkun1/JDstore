/**
 * 2018-1-17 Zheng Kun
 */

import { TabNavigator } from 'react-navigation';
import Homepage from './pages/Homepage';
import Self from './pages/Self';
import Found from './pages/Found';
import Classify from './pages/Classify';
import ShoppingCart from './pages/ShoppingCart';


const Tabs = TabNavigator({
  HOME: { screen: Homepage },
  Classify: { screen: Classify },
  Found: { screen: Found },
  ShoppingCart: { screen: ShoppingCart },
  Self: { screen: Self },
}, {
  tabBarPosition: 'bottom',
});
const Navigations = {
  Main: { screen: Tabs },
};

export default Navigations;
