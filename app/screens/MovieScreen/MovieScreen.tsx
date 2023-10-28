import React from 'react';
import {SafeAreaView} from 'react-native';

import {styles} from './styles/styles';
import {MovieReviewForm} from './MovieReviewForm';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList} from '../../navigation/types';
import {Movie} from '../../types/Movies';

type Props = NativeStackScreenProps<RootTabParamList, 'MovieScreen'>;
const MovieScreen: React.FC<Props> = ({route}) => {
  const movie: undefined | Movie = route.params.movie;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MovieReviewForm movieItem={movie} />
    </SafeAreaView>
  );
};
export {MovieScreen};
