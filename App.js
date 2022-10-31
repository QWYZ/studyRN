/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import TabRoute from './src/routes/tabRoute';

const App: () => Node = () => {

  return (

    <NavigationContainer>
      <TabRoute />
    </NavigationContainer>
  )
};


export default App;
