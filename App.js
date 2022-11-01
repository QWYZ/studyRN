/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabRoute from './src/routes/TabRoute';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';


const Stack = createNativeStackNavigator()
const App: () => Node = () => {

  const TabRouteCallBack = useCallback(()=> <TabRoute />,[])

  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Stack.Navigator
        initialRouteName='tabHome' //初始渲染时要关注的路由的名称
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='tabHome' component={TabRouteCallBack} />
        <Stack.Screen name='login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default App;
