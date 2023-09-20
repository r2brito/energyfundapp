import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './trade.style';

export function TradeScreen({navigation: {navigate}}) {
  return (
    <View style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always" />
    </View>
  );
}
