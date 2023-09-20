import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './portifolio.style';

export function PortifolioScreen({navigation: {navigate}}) {
  return (
    <View style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always" />
    </View>
  );
}
