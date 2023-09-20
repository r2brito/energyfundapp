import React from 'react';
import {ScrollView, View, TouchableOpacity, FlatList} from 'react-native';

import {Header} from '@components/header';
import {ThemedContainer} from '@components/themed-container';
import {ThemedText} from '@components/themed-text';
import {FontSize, FontWeight} from '../../styles';

import IconLeft from '@assets/svg/left.svg';
import IconUp from '@assets/svg/up.svg';
import IconPortifolio from '@assets/svg/portifolio.svg';

import styles from './details.style';

import {useColors} from '@hooks/use-colors.hook';
import {HighlightedComponent} from '@components/index';

const dataMockHighlighted = [
  {
    text: 'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
  },
  {
    text: 'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
  },
  {
    text: 'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules. Read more',
  },
  {
    text: 'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules. Read more',
  },
];

export function DetailsScreen({
  navigation: {navigate, goBack},
  route: {params},
}) {
  const colors = useColors();

  const {fundId} = params || {};

  const emptyContent = () => (
    <ThemedText fontWeight="600" style={styles.labelEmptyContent}>
      Nenhum resultado
    </ThemedText>
  );

  return (
    <View style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always">
        <ThemedContainer style={styles.content}>
          <Header
            titleAlignment="center"
            leftComponent={
              <TouchableOpacity onPress={() => goBack()}>
                <IconLeft />
              </TouchableOpacity>
            }
            centerComponent={
              <>
                <ThemedText
                  type="black"
                  style={{...FontSize.textSM, ...FontWeight.Sora.semiBold}}>
                  {fundId.title}
                </ThemedText>
                <ThemedText
                  type="gray1"
                  style={{...FontSize.textSM, ...FontWeight.Sora.regular}}>
                  WFND
                </ThemedText>
              </>
            }
            rightComponent={<></>}
            transparent
          />
          <View style={[styles.divider]} />
          <View style={styles.padding}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
                marginTop: 10,
              }}>
              <ThemedText
                type="black"
                style={{
                  ...FontSize.title2,
                  ...FontWeight.Sora.semiBold,
                  width: '50%',
                }}>
                $18.23
              </ThemedText>
              <ThemedText
                type="black"
                style={{
                  ...FontSize.title2,
                  ...FontWeight.Sora.semiBold,
                  width: '50%',
                  textAlign: 'right',
                }}>
                2022
              </ThemedText>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconUp />
              <ThemedText
                type="green1"
                style={{
                  ...FontSize.textSM,
                  ...FontWeight.Sora.regular,
                }}>
                3.51% ($1.21)
              </ThemedText>
            </View>
            <View style={{height: 150, backgroundColor: 'red'}}></View>
            <View>
              <ThemedText
                type="black"
                style={{
                  ...FontSize.textLarge,
                  ...FontWeight.Sora.semiBold,
                  marginTop: 20,
                }}>
                Info & Stats
              </ThemedText>
              <View
                style={[
                  {
                    padding: 10,
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  },
                ]}>
                <View style={{width: '50%'}}>
                  <ThemedText
                    type="gray5"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                    }}>
                    AUM
                  </ThemedText>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    $430.88m
                  </ThemedText>
                  <ThemedText
                    type="gray5"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                    }}>
                    Vintage Range
                  </ThemedText>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    2019 – 2022
                  </ThemedText>
                  <ThemedText
                    type="gray5"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                    }}>
                    Price at Close
                  </ThemedText>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    $17.68
                  </ThemedText>
                </View>
                <View style={{width: '50%'}}>
                  <ThemedText
                    type="gray5"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                    }}>
                    Issue Date
                  </ThemedText>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    18/04/2022
                  </ThemedText>
                  <ThemedText
                    type="gray5"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                    }}>
                    TER
                  </ThemedText>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    0.15%
                  </ThemedText>
                  <ThemedText
                    type="gray5"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                    }}>
                    Price at Open
                  </ThemedText>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    $17.74
                  </ThemedText>
                </View>
              </View>
            </View>
            <View style={{marginTop: 24}}>
              <ThemedText
                type="black"
                style={{
                  ...FontSize.textLarge,
                  ...FontWeight.Sora.semiBold,
                }}>
                Fund Breakdown
              </ThemedText>
              <View style={styles.row}>
                <ThemedText fontWeight="600" style={styles.labelTitles}>
                  Highlighted
                </ThemedText>
                <FlatList
                  horizontal
                  data={dataMockHighlighted}
                  renderItem={({item}) => (
                    <HighlightedComponent text={item.text} />
                  )}
                />
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <IconPortifolio />
                <ThemedText
                  type="black"
                  style={{
                    ...FontSize.textSM,
                    ...FontWeight.Sora.regular,
                  }}>
                  Your Portfolio
                </ThemedText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'space-between',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: '50%',
                  }}>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.title2,
                      ...FontWeight.Sora.semiBold,
                    }}>
                    18 credits
                  </ThemedText>
                  <ThemedText
                    type="green1"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                    }}>
                    8.41%
                  </ThemedText>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    width: '50%',
                    alignItems: 'flex-end',
                  }}>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.title2,
                      ...FontWeight.Sora.semiBold,
                    }}>
                    $328.14
                  </ThemedText>
                  <ThemedText
                    type="gray3"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                    }}>
                    Last purchase 28d ago
                  </ThemedText>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor: colors.white,
                      borderWidth: 2,
                      borderColor: colors.gray5,
                    },
                  ]}>
                  <ThemedText
                    type="accent1"
                    style={{
                      ...FontSize.textBase,
                      ...FontWeight.Sora.medium,
                      marginTop: 10,
                    }}>
                    Sell
                  </ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: colors.green1}]}>
                  <ThemedText
                    type="white"
                    style={{
                      ...FontSize.textBase,
                      ...FontWeight.Sora.medium,
                      marginTop: 10,
                    }}>
                    Retire credits
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ThemedContainer>
      </ScrollView>
    </View>
  );
}
