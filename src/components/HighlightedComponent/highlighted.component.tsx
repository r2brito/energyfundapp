import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColors} from '@hooks/use-colors.hook';
import {ThemedText} from '../themed-text/themed-text.component';

interface Props {
  text: string;
}

const colors = useColors();

export const HighlightedComponent: React.FC<Props> = ({text}) => (
  <TouchableOpacity style={styles.card}>
    <Image
      source={require('@assets/images/highlighted1.png')}
      style={{marginBottom: 5}}
      resizeMode="cover"
    />
    <Image
      source={require('@assets/images/highlighted-logo.png')}
      style={{marginBottom: 5}}
    />
    <ThemedText fontWeight="400" style={[styles.label, styles.textContainer]}>
      {text}
    </ThemedText>
    <TouchableOpacity>
      <ThemedText fontWeight="400" style={styles.label}>
        Read more
      </ThemedText>
    </TouchableOpacity>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 2,
    borderRadius: 4,
    marginBottom: '4%',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: colors.gray1,
    margin: 5,
  },
  label: {
    fontSize: 12,
    color: colors.black,
    lineHeight: 12,
  },
  textContainer: {
    flex: 1,
    width: 210,
  },
});
