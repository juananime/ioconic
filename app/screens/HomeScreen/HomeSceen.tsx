import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  SafeAreaView,
  View,
} from 'react-native';

import {styles} from './styles/styles';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {Movie, SortType} from '../../types/Movies';
import {RootState} from '../../reducers/Store';
import {MovieListItem} from './MovieListItem';
import {AddNewMovieComponent} from './AddNewMovieComponent';
import {EmptyLIst} from './EmptyLIst';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList} from '../../navigation/types';
import {Title} from '../../components/Title';
import {SortIcon} from './SortIcon';
import {sortMovies} from '../../reducers/movies';
type Props = NativeStackScreenProps<RootTabParamList, 'ReviewScreen'>;
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [sort, setSort] = useState<SortType>('ascendant');
  const movies: Array<Movie> = useAppSelector(
    (state: RootState) => state.movies.movies,
  );

  const dispatch = useAppDispatch();

  const onMovieItemListPress = (movie: Movie) => {
    navigation.navigate('MovieScreen', {movie});
  };

  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <MovieListItem item={item} onPress={onMovieItemListPress} />
  );

  useEffect(() => {
    dispatch(sortMovies(sort));
  }, [sort, movies]);

  const onSortPress = () => {
    setSort(sort === 'ascendant' ? 'descendant' : 'ascendant');
  };

  const onAddMoviePress = useCallback(() => {
    navigation.navigate('MovieScreen', {movie: undefined});
  }, [navigation]);

  const keyExtractor = (item: Movie, index: number) =>
    `movies_list_${item.id}_${index}`;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.titleCell}>
          <Title>TITLE</Title>
        </View>
        <View style={styles.synopsysCell}>
          <Title>SYNOPSIS</Title>
        </View>
        <Pressable
          onPress={onSortPress}
          style={[
            styles.rateCell,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <Title>RATE</Title>
          <SortIcon sort={sort} />
        </Pressable>
      </View>
      {movies.length ? (
        <FlatList
          keyExtractor={keyExtractor}
          data={movies}
          renderItem={renderItem}
        />
      ) : (
        <EmptyLIst />
      )}
      <AddNewMovieComponent onPress={onAddMoviePress} />
    </SafeAreaView>
  );
};

export {HomeScreen};
