import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './home.style';
import {Header} from '@components/header';
import {ThemedContainer} from '@components/themed-container';
import {ThemedText} from '@components/themed-text';
import {FontSize, FontWeight} from '../../styles';
import IconAccount from '@assets/svg/account.svg';

export function HomeScreen({navigation: {navigate}}) {
  return (
    <View style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always">
        <ThemedContainer style={styles.content}>
          <Header
            titleAlignment="center"
            leftComponent={
              <TouchableOpacity>
                <IconAccount />
              </TouchableOpacity>
            }
            centerComponent={
              <TouchableOpacity>
                <ThemedText
                  type="black"
                  style={{...FontSize.textSM, ...FontWeight.Sora.semiBold}}>
                  Account: $1,457.23
                </ThemedText>
              </TouchableOpacity>
            }
            rightComponent={<></>}
            transparent
          />
        </ThemedContainer>
      </ScrollView>
    </View>
  );
}
