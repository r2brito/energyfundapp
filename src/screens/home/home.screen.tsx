import React from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './home.style';
import {Header} from '@components/header';
import {ThemedContainer} from '@components/themed-container';
import {ThemedText} from '@components/themed-text';
import {FontSize, FontWeight} from '../../styles';
import IconAccount from '@assets/svg/account.svg';
import IconNotification from '@assets/svg/notification.svg';
import IconUp from '@assets/svg/up.svg';
import IconRewards from '@assets/svg/rewards.svg';

import {useColors} from '@hooks/use-colors.hook';
import {FundCard} from '@components/home';

const dataFunds = [
  {
    id: '1',
    icon: 'wind',
    title: 'Wind Fund',
    value: '1032.23',
    percentage: '3.51',
    status: 'positive',
  },
  {
    id: '2',
    icon: 'sun',
    title: 'Solar Fund',
    value: '1032.23',
    percentage: '3.51',
    status: 'negative',
  },
  {
    id: '3',
    icon: 'nature',
    title: 'Nature',
    value: '1122.95',
    percentage: '0.30',
    status: 'positive',
  },
];

export function HomeScreen({navigation: {navigate}}) {
  const colors = useColors();

  return (
    <View style={styles.root}>
      <ScrollView keyboardShouldPersistTaps="always">
        <ThemedContainer style={styles.content}>
          <Header
            titleAlignment="center"
            leftComponent={
              <TouchableOpacity style={styles.accountIcon}>
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
            rightComponent={
              <TouchableOpacity>
                <IconNotification />
              </TouchableOpacity>
            }
            transparent
          />
          <View style={styles.padding}>
            <View style={{marginTop: 35}}>
              <ThemedText
                type="black"
                style={{...FontSize.textXS, ...FontWeight.Sora.regular}}>
                Portfolio
              </ThemedText>
              <View
                style={[
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                ]}>
                <View
                  style={[
                    {
                      flexDirection: 'row',
                    },
                  ]}>
                  <ThemedText
                    type="black"
                    style={{...FontSize.title2, ...FontWeight.Sora.semiBold}}>
                    $1,245.23
                  </ThemedText>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 10,
                    }}>
                    <IconUp />
                    <ThemedText
                      type="green1"
                      style={{...FontSize.textSM, ...FontWeight.Sora.regular}}>
                      31.82%
                    </ThemedText>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    backgroundColor: colors.accent2,
                    borderRadius: 4,
                    padding: 4,
                    alignItems: 'center',
                  }}>
                  <IconRewards />
                  <ThemedText
                    type="accent1"
                    style={{
                      ...FontSize.textSM,
                      ...FontWeight.Sora.regular,
                      marginLeft: 5,
                    }}>
                    Earn Rewards
                  </ThemedText>
                </TouchableOpacity>
              </View>
              <View style={[styles.divider, {bottom: -30}]} />
            </View>
            <View style={{marginTop: 50}}>
              <ThemedText
                type="black"
                style={{...FontSize.textLarge, ...FontWeight.Sora.semiBold}}>
                Funds
              </ThemedText>
              <FlatList
                horizontal
                data={dataFunds}
                keyExtractor={item => item.id}
                renderItem={({item}) => <FundCard data={item} />}
                showsVerticalScrollIndicator={false}
              />
              <View
                style={{
                  marginTop: 24,
                  backgroundColor: 'red',
                  padding: 10,
                  flexDirection: 'row',
                }}>
                <View>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.textLarge,
                      ...FontWeight.Sora.semiBold,
                    }}>
                    Learn more about carbon credits
                  </ThemedText>
                  <ThemedText
                    type="black"
                    style={{
                      ...FontSize.textLarge,
                      ...FontWeight.Sora.semiBold,
                    }}>
                    Check out our top tips!
                  </ThemedText>
                </View>
              </View>
            </View>
          </View>
        </ThemedContainer>
      </ScrollView>
    </View>
  );
}
