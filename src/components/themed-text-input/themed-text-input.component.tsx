import React from 'react';
import {TextInput} from 'react-native-paper';
import {useColors} from '@hooks/use-colors.hook';

export default function ThemedTextInput(props: any) {
  const colors = useColors();

  return (
    <>
      <TextInput
        ref={props.reference}
        mode="outlined"
        dense
        theme={{
          colors: {
            placeholder: colors.white,
            primary: colors.accent1,
            text: colors.white,
          },
        }}
        {...props}
      />
    </>
  );
}
