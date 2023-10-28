import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Movie} from '../types/Movies';

declare global {
  namespace ReactNavigation {
    // @ts-ignore
    type RootParamList = RootStackParamList;
  }
}

export type MovieScreenParamList = {
  movie?: Movie;
};
export type RootTabParamList = {
  ReviewScreen: undefined;
  MovieScreen: MovieScreenParamList;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
