import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './home.style';

export function HomeScreen({navigation: {navigate}}) {
  return (
    <View style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always" />
    </View>
  );
}
