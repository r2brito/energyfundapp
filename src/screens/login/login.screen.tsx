import React, {useRef} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';

import {Header} from '@components/header';
import {ThemedText} from '@components/themed-text';
import {ThemedTextInput} from '@components/themed-text-input';
import {FontSize, FontWeight} from '../../styles';

import {useTextInput} from '@hooks/use-text-input';

import {validateEmail} from '../../helpers/form-validation/validate-email';

import styles from './login.style';

export function LoginScreen({navigation: {navigate}}) {
  const usernameInputRef = useRef(null);
  const [username, usernameValid] = useTextInput(null, validateEmail);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={0}
      style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Header transparent />
        <View style={[styles.divider, {bottom: -30}]} />
        <ThemedText
          type="accent1"
          style={{
            ...FontSize.textSM,
            ...FontWeight.Sora.regular,
            marginLeft: 5,
          }}>
          Login
        </ThemedText>

        <ThemedText
          type="accent1"
          style={{
            ...FontSize.textSM,
            ...FontWeight.Sora.regular,
            marginLeft: 5,
          }}>
          E-mail
        </ThemedText>
        <ThemedTextInput
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="username"
          keyboardType="email-address"
          placeholder={'login.Placeholder'}
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => usernameInputRef?.current?.focus()}
          {...username}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
