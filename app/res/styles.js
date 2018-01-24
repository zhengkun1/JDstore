import { Dimensions } from 'react-native';

const _width = 640;
const _height = 1138;

const Styles = {
  ScreenWidth: Dimensions.get('window').width,

  Height: (x) => {
    return x * Dimensions.get('window').height / _height; //eslint-disable-line
  },

  Width: (y) => {
    return y * Dimensions.get('window').width / _width; //eslint-disable-line
  },
};

export default Styles;
