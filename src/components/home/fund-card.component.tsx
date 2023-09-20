import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useColors} from '@hooks/use-colors.hook';

import IconWind from '@assets/svg/wind.svg';
import IconSun from '@assets/svg/sun.svg';
import IconNature from '@assets/svg/nature.svg';
import IconUp from '@assets/svg/up.svg';
import IconDown from '@assets/svg/down.svg';
import {ThemedText} from '../themed-text';

import {FontSize, FontWeight} from '../../styles';

interface FundCardProps {
  data: any;
}
export const FundCard = ({data}: FundCardProps) => {
  const styles = useStyles();
  const colors = useColors();

  return (
    <View>
      <View
        style={[
          {
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 4,
            margin: 5,
            borderWidth: 2,
            borderColor: colors.gray6,
          },
        ]}>
        {data.icon == 'wind' && <IconWind />}
        {data.icon == 'sun' && <IconSun />}
        {data.icon == 'nature' && <IconNature />}
        <ThemedText
          type="black"
          style={{
            ...FontSize.textXS,
            ...FontWeight.Sora.semiBold,
          }}>
          {data.title}
        </ThemedText>
        <View style={{height: 40}}></View>
        <View style={{flexDirection: 'row'}}>
          <ThemedText
            type="black"
            style={{
              ...FontSize.textSM,
              ...FontWeight.Sora.regular,
            }}>
            $ {data.value}
          </ThemedText>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
            {data.status === 'positive' ? <IconUp /> : <IconDown />}
            <ThemedText
              type={data.status === 'positive' ? 'green1' : 'red1'}
              style={{
                ...FontSize.textSM,
                ...FontWeight.Sora.regular,
                marginLeft: 2,
              }}>
              {data.percentage}%
            </ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
};

const useStyles = () => {
  const colors = useColors();

  return StyleSheet.create({});
};
