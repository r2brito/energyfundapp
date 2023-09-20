import React, {Suspense} from 'react';
import {Platform, StatusBar, UIManager, View} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColors} from '../src/hooks/use-colors.hook';
import {useFonts} from '@hooks/use-fonts.hook';
import {RootStackScreen} from '@routes/root-stack.screen';
import {TabBarDataProvider} from './hooks/useTabBarData.provider';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function App() {
  const colors = useColors();
  const fonts = useFonts();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: colors.black,
    },
    fonts: {
      regular: {fontFamily: fonts['400']},
      medium: {fontFamily: fonts['500']},
      light: {fontFamily: fonts['300']},
      thin: {fontFamily: fonts['200']},
    },
  };

  const iosTheme = {
    ...theme,
    roundness: 14,
  };

  const androidTheme = {
    ...theme,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <PaperProvider theme={Platform.OS === 'ios' ? iosTheme : androidTheme}>
        <Suspense
          fallback={<View style={{flex: 1, backgroundColor: 'yellow'}} />}>
          <TabBarDataProvider>
            <RootStackScreen />
          </TabBarDataProvider>
        </Suspense>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
