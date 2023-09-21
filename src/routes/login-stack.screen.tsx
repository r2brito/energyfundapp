import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {LoginScreen} from '@screens/login/login.screen';
import {SignupScreen} from '@screens/signup/signup.screen';

const LoginStack = createSharedElementStackNavigator();

export const LoginStackScreen = () => (
  <LoginStack.Navigator
    screenOptions={{headerShown: false, headerMode: 'screen'}}
    initialRouteName="">
    <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    <LoginStack.Screen name="SignupScreen" component={SignupScreen} />
  </LoginStack.Navigator>
);
