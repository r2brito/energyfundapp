import React from 'react';
import {Text, TextProps} from 'react-native';
import {useColors} from '@hooks/use-colors.hook';
import {useFonts} from '@hooks/use-fonts.hook';

interface ThemedTextProps extends TextProps {
  children: any;
  type?:
    | 'black'
    | 'gray1'
    | 'gray2'
    | 'gray3'
    | 'gray4'
    | 'gray5'
    | 'gray6'
    | 'accent1'
    | 'green1'
    | 'white';
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800';
}

export function ThemedText(props: ThemedTextProps) {
  const colors = useColors();
  const fonts = useFonts();
  const {type = 'white', fontWeight = '400'} = props;
  const color = colors[type];
  const fontFamily = fonts[fontWeight];

  return (
    <Text {...props} style={[{color, fontFamily}, props.style]}>
      {props.children}
    </Text>
  );
}
