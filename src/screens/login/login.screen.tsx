import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import styles from './login.style';

export function LoginScreen({navigation: {navigate}}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={0}
      style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always" />
    </KeyboardAvoidingView>
  );
}
