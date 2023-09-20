import {StackScreenProps} from '@react-navigation/stack';

export type MainStackParamList = {
  Home: {};
  Trade: {};
  Portifolio: {};
};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;
