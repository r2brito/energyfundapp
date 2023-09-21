import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

import {Chart, Line} from 'react-native-responsive-linechart';

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

export const {width: SIZE} = Dimensions.get('window');

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

export const data = [
  {x: 1453075200, y: 1.47},
  {x: 1453161600, y: 1.37},
  {x: 1453248000, y: 1.53},
  {x: 1453334400, y: 1.54},
  {x: 1453420800, y: 1.52},
  {x: 1453507200, y: 2.03},
  {x: 1453593600, y: 2.1},
  {x: 1453680000, y: 2.5},
  {x: 1453766400, y: 2.3},
  {x: 1453852800, y: 2.42},
  {x: 1453939200, y: 2.55},
  {x: 1454025600, y: 2.41},
  {x: 1454112000, y: 2.43},
  {x: 1454198400, y: 2.2},
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
            <View style={{backgroundColor: 'transparent'}}>
              <Chart
                style={{height: 200, width: '100%'}}
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
                {/* <HorizontalAxis tickValues={[-2, 0, 2, 6, 8, 10]} /> */}
                <Line theme={{stroke: {color: '#44bd32', width: 2}}} />
              </Chart>
            </View>
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
              <ThemedText
                type="gray4"
                style={{
                  ...FontSize.textXS,
                  ...FontWeight.Sora.regular,
                  marginTop: 10,
                }}>
                You’ve previously retired 28 credits of this asset
              </ThemedText>
              <View
                style={{
                  backgroundColor: colors.gray6,
                  padding: 5,
                  borderRadius: 4,
                  marginTop: 10,
                  marginBottom: 40,
                }}>
                <ThemedText
                  type="gray3"
                  style={{
                    ...FontSize.textXS,
                    ...FontWeight.Sora.regular,
                  }}>
                  Please note that prices are for reference only and may vary at
                  the time of excecuting a buy or sell order. The information
                  provided is not investment advice, and should not be used as a
                  recommendation to buy or sell assets.
                </ThemedText>
              </View>
              <TouchableOpacity style={styles.buttonBuy}>
                <ThemedText
                  type="white"
                  style={{
                    ...FontSize.textBase,
                    ...FontWeight.Sora.medium,
                    marginTop: 10,
                  }}>
                  Buy
                </ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </ThemedContainer>
      </ScrollView>
    </View>
  );
}
