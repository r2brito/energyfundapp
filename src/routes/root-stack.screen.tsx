import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native';
import {LoginStackScreen} from './login-stack.screen';
import {MainStackScreen} from './main-stack.screen';

import {useLoginContext} from '@hooks/use-login.provider';

const RootStack = createStackNavigator();

function _RootStackScreen() {
  const {token} = useLoginContext();

  let navigator: JSX.Element;
  navigator = token ? (
    <RootStack.Screen name="Main" component={MainStackScreen} />
  ) : (
    <RootStack.Screen name="LoginMain" component={LoginStackScreen} />
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
