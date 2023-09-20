import constate from 'constate';
import {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export enum HomeTabs {
  Home = 'Home',
  Trade = 'Trade',
  Portfolio = 'Portfolio',
}

const useTabBarData = () => {
  const {bottom} = useSafeAreaInsets();

  const TAB_BAR_HEIGHT = 50;

  const tabBarTotalHeight = useMemo(() => TAB_BAR_HEIGHT + bottom, [bottom]);

  return {
    TAB_BAR_HEIGHT,
    tabBarTotalHeight,
  };
};

export const [TabBarDataProvider, useTabBarDataContext] =
  constate(useTabBarData);
