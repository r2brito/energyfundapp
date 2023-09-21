import React, {useRef} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import {Header} from '@components/header';
import {ThemedText} from '@components/themed-text';
import {ThemedTextInput} from '@components/themed-text-input';
import {ThemedContainer} from '@components/themed-container/themed-container.component';

import {FontSize, FontWeight} from '../../styles';

import {useTextInput} from '@hooks/use-text-input';
import {useColors} from '@hooks/use-colors.hook';
import {useLoginContext} from '@hooks/use-login.provider';

import {validateEmail} from '../../helpers/form-validation/validate-email';
import {validatePassword} from '../../helpers/form-validation/validate-password';

import styles from './login.style';

export function LoginScreen({navigation: {navigate}}) {
  const colors = useColors();

  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [username, usernameValid] = useTextInput(null, validateEmail);
  const [password, passwordValid] = useTextInput(null, validatePassword);

  const {errors, loading, loginWithUsernamePassword} = useLoginContext();

  const login = async () => {
    if (passwordValid) {
      loginWithUsernamePassword(username.value, password.value);
    } else {
      console.log('Erro ao fazer Login');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={0}
      style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always">
        <ThemedContainer style={styles.content}>
          <Header
            transparent
            bodyStyle={{
              borderBottomWidth: 1,
              borderColor: colors.gray5,
            }}
          />
          <View style={[styles.divider, {bottom: -30}]} />
          <View style={[styles.padding]}>
            <ThemedText
              type="black"
              style={{
                ...FontSize.textLarge,
                ...FontWeight.Sora.semiBold,
                textAlign: 'center',
                marginBottom: 30,
              }}>
              Login
            </ThemedText>

            <ThemedText
              type="gray5"
              style={{
                ...FontSize.textXS,
                ...FontWeight.Sora.regular,
              }}>
              E-mail
            </ThemedText>
            <ThemedTextInput
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="username"
              keyboardType="email-address"
              placeholder={'email@example.com'}
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => usernameInputRef?.current?.focus()}
              {...username}
            />

            <ThemedText
              type="gray5"
              style={{
                ...FontSize.textXS,
                ...FontWeight.Sora.regular,
              }}>
              Password
            </ThemedText>
            <ThemedTextInput
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              keyboardType="default"
              placeholder={'Minimum 8 characters'}
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef?.current?.focus()}
              {...password}
            />

            <TouchableOpacity style={styles.buttonLogin} onPress={login}>
              <ThemedText
                type="gray5"
                style={{
                  ...FontSize.textBase,
                  ...FontWeight.Sora.regular,
                  marginTop: 15,
                }}>
                Login
              </ThemedText>
            </TouchableOpacity>
            <ThemedText
              type="gray5"
              style={{
                ...FontSize.textXS,
                ...FontWeight.Sora.regular,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Don’t have an account? Sign up here
            </ThemedText>
          </View>
        </ThemedContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
