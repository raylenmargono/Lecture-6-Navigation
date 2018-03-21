import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { StackNavigator, SwitchNavigator, TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import {AuthLoadingScreen, SignInScreen, SignOutScreen, HomeScreen, OtherScreen} from './views'

const OtherTab = TabNavigator({SignOut: {screen: SignOutScreen}, Other: {screen: OtherScreen}});
const AppStack = StackNavigator({ Home: HomeScreen, Other: OtherTab });


export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: SignInScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);