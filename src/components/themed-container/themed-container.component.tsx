import React from 'react';
import {View, ViewProps} from 'react-native';
import {useColors} from '@hooks/use-colors.hook';

interface ThemedContainerProps extends ViewProps {
  children: any;
}

export function ThemedContainer({
  children,
  style,
  ...props
}: ThemedContainerProps) {
  const colors = useColors();

  return (
    <View style={[{flex: 1, backgroundColor: colors.white}, style]} {...props}>
      {children}
    </View>
  );
}
