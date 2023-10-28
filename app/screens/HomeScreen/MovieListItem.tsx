import React from 'react';
import {Pressable, View} from 'react-native';

import {Title} from '../../components/Title';
import {Movie} from '../../types/Movies';
import {styles} from './styles/styles';
import {EditIcon} from './EditIcon';

interface Props {
  item: Movie;
  onPress: (item: Movie) => void;
}
const MovieListItem: React.FC<Props> = ({item, onPress}) => {
  const onPressItem = () => {
    onPress(item);
  };
  return (
    <Pressable style={styles.movieListCell} onPress={onPressItem}>
      <View style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
        <Title>{item.title}</Title>
      </View>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <Title>{item.synopsis}</Title>
      </View>
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
        <Title>{item.rate}</Title>
      </View>
      <View style={{flex: 0.1}}>
        <EditIcon />
      </View>
    </Pressable>
  );
};

export {MovieListItem};
