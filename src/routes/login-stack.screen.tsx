import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {LoginScreen} from '@screens/login/login.screen';

const LoginStack = createSharedElementStackNavigator();

export const LoginStackScreen = () => (
  <LoginStack.Navigator
    screenOptions={{headerShown: false, headerMode: 'screen'}}
    initialRouteName="">
    <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
  </LoginStack.Navigator>
);
