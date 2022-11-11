// import { Dimensions, Platform, PixelRatio, NativeModules,NativeMo } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')//可视区宽度和高度
const deviceHeight = Dimensions.get('screen').height;

export default {
    width: width,
    height: height,
    deviceHeight: deviceHeight
}