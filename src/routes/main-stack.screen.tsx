import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeTabScreen} from './home-tab.screen';

const MainStack = createStackNavigator();

function _MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false, headerMode: 'screen'}}>
      <MainStack.Screen name="Tab" component={HomeTabScreen} />
    </MainStack.Navigator>
  );
}

export const MainStackScreen = _MainStackScreen;
