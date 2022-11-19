/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useEffect } from 'react';
import type { Node } from 'react';
import {
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabRoute from './src/navigator/TabRoute';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import { storeStorageData } from './src/utils/storage';
import { NativeBaseProvider } from 'native-base';
import HomeStackScreen from './src/navigator/HomeStackScreen';


const Stack = createNativeStackNavigator()
const App: () => Node = () => {

  useEffect(()=>{
    NativeModules.SplashScreenModule.hide();//关闭启动页
  },[])
  storeStorageData('token', '123456');

  const TabRouteCallBack = useCallback(() => <TabRoute />, [])
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <Stack.Navigator
          initialRouteName='tabHome' //初始渲染时要关注的路由的名称
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='tabHome' component={TabRoute} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name="home" component={HomeStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
};


export default App;
