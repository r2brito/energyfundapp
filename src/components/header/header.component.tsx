import React from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemedText} from '@components/themed-text/themed-text.component';
import {useColors} from '@hooks/use-colors.hook';

export const HEADER_HEIGHT = 56;

export interface HeaderProps {
  safeArea?: boolean;
  transparent?: boolean;

  title?: string;
  subtitle?: string;
  titleAlignment?: 'left' | 'center';
  titleWeight?: string;
  leftComponent?: JSX.Element;
  centerComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  bottomComponent?: JSX.Element;

  onLayout?: (event: LayoutChangeEvent) => void;

  containerStyle?: ViewStyle;
  bodyStyle?: ViewStyle;
  topRowStyle?: ViewStyle;
  leftContainerStyle?: ViewStyle;
  centerContainerStyle?: ViewStyle;
  rightContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

export const Header = ({
  safeArea = true,
  transparent = false,

  title,
  subtitle,
  titleAlignment = 'left',

  leftComponent,
  centerComponent,
  rightComponent,
  bottomComponent,

  onLayout,

  containerStyle,
  bodyStyle,
  topRowStyle,
  leftContainerStyle,
  centerContainerStyle,
  rightContainerStyle,
  titleStyle,
  titleWeight,
}: HeaderProps) => {
  const styles = useStyles(titleAlignment);

  return (
    <View
      style={StyleSheet.flatten(
        StyleSheet.flatten([
          styles.body,
          bodyStyle,
          transparent && styles.transparent,
          containerStyle,
        ]),
      )}
      onLayout={onLayout}>
      {safeArea && <SafeAreaView edges={['top']} />}
      <View style={[styles.topRow, topRowStyle]}>
        {(leftComponent || (!leftComponent && titleAlignment !== 'left')) && (
          <View style={[styles.leftContainer, leftContainerStyle]}>
            {leftComponent}
          </View>
        )}
        <View style={[styles.centerContainer, centerContainerStyle]}>
          {centerComponent ? (
            centerComponent
          ) : (
            <>
              <ThemedText
                fontWeight={titleWeight ? titleWeight : '800'}
                style={StyleSheet.flatten([styles.title, titleStyle])}>
                {title}
              </ThemedText>
              {subtitle && (
                <ThemedText fontWeight="600" style={styles.subtitle}>
                  {subtitle}
                </ThemedText>
              )}
            </>
          )}
        </View>
        {rightComponent && (
          <View style={[styles.rightContainer, rightContainerStyle]}>
            {rightComponent}
          </View>
        )}
      </View>
      {bottomComponent}
    </View>
  );
};

const useStyles = (titleAlignment: string) => {
  const {top} = useSafeAreaInsets();
  const colors = useColors();

  return StyleSheet.create({
    body: {
      height: top + HEADER_HEIGHT,
      backgroundColor: colors.gray1,
      paddingBottom: 10,
    },
    transparent: {
      backgroundColor: colors.transparent,
    },
    topRow: {
      flexDirection: 'row',
      padding: 15,
      paddingBottom: 0,
    },
    leftContainer: {
      flex: titleAlignment !== 'left' ? 1 : 0,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingRight: titleAlignment !== 'left' ? 0 : 15,
    },
    centerContainer: {
      flex: 2,
      alignItems: titleAlignment === 'left' ? 'flex-start' : 'center',
      justifyContent: 'center',
    },
    title: {
      color: colors.black,
      fontSize: 24,
    },
    subtitle: {
      color: colors.gray2,
      fontSize: 12,
    },
    rightContainer: {
      flex: titleAlignment !== 'left' ? 1 : 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignContent: 'center',
    },
  });
};
