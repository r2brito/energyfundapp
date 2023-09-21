import {AnimatePresence, MotiView} from 'moti';
import React from 'react';
import {ColorValue, StyleSheet, ViewStyle} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useColors} from '@hooks/use-colors.hook';
import {TickIcon} from '../icons/tick-icon.component';

interface CheckBoxProps {
  isChecked: boolean;
  onChange?: (isChecked: boolean) => void;
  uncheckedBackgroundColor?: ColorValue;
  checkedBackgroundColor?: ColorValue;
  containerStyle?: ViewStyle;
}

const DEFAULT_SIZE = 24;

export const CheckBox = ({
  isChecked,
  onChange,
  uncheckedBackgroundColor,
  checkedBackgroundColor,
  containerStyle,
}: CheckBoxProps) => {
  const colors = useColors();
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={() => onChange(!isChecked)}>
      <MotiView
        animate={{
          backgroundColor: !isChecked
            ? uncheckedBackgroundColor || colors.transparent
            : checkedBackgroundColor || colors.accent1,
        }}
        style={StyleSheet.flatten([styles.container, containerStyle])}>
        <AnimatePresence>
          {isChecked && (
            <MotiView from={{scale: 0}} animate={{scale: 1}}>
              <TickIcon />
            </MotiView>
          )}
        </AnimatePresence>
      </MotiView>
    </TouchableWithoutFeedback>
  );
};

const useStyles = () => {
  const colors = useColors();

  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.accent1,
      width: DEFAULT_SIZE,
      height: DEFAULT_SIZE,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
