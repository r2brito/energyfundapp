import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeIcon} from '../components';
import {useColors} from '@hooks/use-colors.hook';
import {HomeTabs, useTabBarDataContext} from '@hooks/useTabBarData.provider';
import {HomeScreen} from '@screens/home/home.screen';
import {TradeScreen} from '@screens/trade/trade.screen';
import {PortifolioScreen} from '@screens/portifolio/portifolio.screen';
import {MainStackScreenProps} from './types';

const Tab = createBottomTabNavigator();

const EmptyScreen = () => <View />;

export const HomeTabScreen = () => {
  const colors = useColors();

  const {navigate} =
    useNavigation<MainStackScreenProps<HomeTabs.Home>['navigation']>();

  const fillColor = (focused: boolean) =>
    focused ? colors.accent1 : colors.black;

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false, headerMode: 'screen'}}>
      <Tab.Screen
        name={HomeTabs.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon fillColor={fillColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name={HomeTabs.Trade}
        component={TradeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon fillColor={fillColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name={HomeTabs.Portfolio}
        component={PortifolioScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon fillColor={fillColor(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CustomTabBar = ({state, descriptors, navigation}) => {
  const styles = useStyles();

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: any) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const icon = options.tabBarIcon;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabItem}>
              <View style={styles.iconContainer}>
                {icon({focused: isFocused})}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <SafeAreaView edges={['bottom']} style={styles.safeArea} />
    </View>
  );
};

const useStyles = () => {
  const colors = useColors();
  const {TAB_BAR_HEIGHT} = useTabBarDataContext();

  return StyleSheet.create({
    tabBarContainer: {
      backgroundColor: colors.gray1,
    },
    tabBar: {
      flexDirection: 'row',
      height: TAB_BAR_HEIGHT,
    },
    tabItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    safeArea: {
      backgroundColor: colors.gray1,
    },
  });
};
