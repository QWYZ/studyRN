/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//添加下面这行代码，可在debug时，在network中捕获到请求，但是会有跨域问题，不好用
// global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest
AppRegistry.registerComponent(appName, () => App);
