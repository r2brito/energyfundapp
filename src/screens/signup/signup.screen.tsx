import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import {Header} from '@components/header';
import {CheckBox} from '@components/checkbox/checkbox.component';
import {ThemedText} from '@components/themed-text';
import {ThemedTextInput} from '@components/themed-text-input';
import {ThemedContainer} from '@components/themed-container/themed-container.component';

import {FontSize, FontWeight} from '../../styles';

import {useTextInput} from '@hooks/use-text-input';
import {useColors} from '@hooks/use-colors.hook';

import {validateEmail} from '../../helpers/form-validation/validate-email';

import styles from './signup.style';

export function SignupScreen({navigation: {navigate}}) {
  const colors = useColors();

  const usernameInputRef = useRef(null);
  const [username, usernameValid] = useTextInput(null, validateEmail);
  const [checkSelect, setcheckSelect] = useState(false);

  const submit = async () => {
    Alert.alert('Energy Fund', 'Parabens! Sua Conta foi criada com sucesso.');
    navigate('LoginScreen');
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
              Create your account
            </ThemedText>

            <ThemedText
              type="gray5"
              style={{
                ...FontSize.textXS,
                ...FontWeight.Sora.regular,
              }}>
              First Name
            </ThemedText>
            <ThemedTextInput
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="username"
              keyboardType="email-address"
              blurOnSubmit={false}
              returnKeyType="next"
            />

            <ThemedText
              type="gray5"
              style={{
                ...FontSize.textXS,
                ...FontWeight.Sora.regular,
              }}>
              Last Name
            </ThemedText>
            <ThemedTextInput
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="username"
              keyboardType="email-address"
              blurOnSubmit={false}
              returnKeyType="next"
            />

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
            />

            <View
              style={{
                flexDirection: 'row',
                width: 305,
              }}>
              <CheckBox isChecked={checkSelect} onChange={setcheckSelect} />
              <ThemedText
                type="gray5"
                style={{
                  ...FontSize.textXS,
                  ...FontWeight.Sora.regular,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                I am over 18 years of age and I have read and agree to the Terms
                of Service and Privacy policy.
              </ThemedText>
            </View>

            <TouchableOpacity style={styles.buttonLogin} onPress={submit}>
              <ThemedText
                type="gray5"
                style={{
                  ...FontSize.textBase,
                  ...FontWeight.Sora.regular,
                  marginTop: 15,
                }}>
                Create account
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ThemedContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
