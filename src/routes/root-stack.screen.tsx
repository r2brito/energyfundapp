import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LoginStackScreen} from './login-stack.screen';
import {MainStackScreen} from './main-stack.screen';

const RootStack = createStackNavigator();

function _RootStackScreen() {
  let navigator: JSX.Element;
  navigator = 'token?.access' ? (
    <RootStack.Screen name="LoginMain" component={LoginStackScreen} />
  ) : (
    <RootStack.Screen name="Main" component={MainStackScreen} />
  );

  return (
    <NavigationContainer
      fallback={<ActivityIndicator color={'black'} size="large" />}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {navigator}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export const RootStackScreen = _RootStackScreen;
