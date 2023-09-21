import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Chart, Line} from 'react-native-responsive-linechart';

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
  onPress: void;
}
export const FundCard = ({data, onPress}: FundCardProps) => {
  const styles = useStyles();
  const colors = useColors();

  return (
    <TouchableOpacity onPress={onPress}>
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
        <View style={{height: 100}}>
          <Chart
            style={{height: 100, width: '100%'}}
            data={[
              {x: -2, y: 15},
              {x: -1, y: 10},
              {x: 0, y: 12},
              {x: 1, y: 7},
              {x: 2, y: 6},
              {x: 3, y: 3},
              {x: 4, y: 5},
              {x: 5, y: 8},
              {x: 6, y: 12},
              {x: 7, y: 14},
              {x: 8, y: 12},
              {x: 9, y: 13.5},
              {x: 10, y: 18},
            ]}
            padding={{left: 10, bottom: 20, right: 20, top: 20}}
            xDomain={{min: -2, max: 10}}
            yDomain={{min: -4, max: 20}}>
            <Line
              theme={{
                stroke: {
                  color:
                    data.status === 'positive' ? colors.green1 : colors.red1,
                  width: 2,
                },
              }}
            />
          </Chart>
        </View>
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
    </TouchableOpacity>
  );
};

const useStyles = () => {
  const colors = useColors();

  return StyleSheet.create({});
};
