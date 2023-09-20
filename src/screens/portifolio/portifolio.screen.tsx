import React from 'react';
import {ScrollView, View} from 'react-native';

import {Header} from '@components/header';
import {ThemedContainer} from '@components/themed-container';
import {ThemedText} from '@components/themed-text';
import {FontSize, FontWeight} from '../../styles';

import styles from './portifolio.style';

export function PortifolioScreen({navigation: {navigate}}) {
  return (
    <View style={styles.root}>
      <ThemedContainer style={styles.content}>
        <Header
          titleAlignment="center"
          leftComponent={<></>}
          centerComponent={
            <ThemedText
              type="black"
              style={{...FontSize.textSM, ...FontWeight.Sora.semiBold}}>
              Portifolio
            </ThemedText>
          }
          rightComponent={<></>}
          transparent
        />
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.padding}>
            <ThemedText
              type="black"
              style={{
                ...FontSize.textSM,
                ...FontWeight.Sora.semiBold,
                textAlign: 'justify',
              }}>
              TrLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.ade
            </ThemedText>
          </View>
        </ScrollView>
      </ThemedContainer>
    </View>
  );
}
