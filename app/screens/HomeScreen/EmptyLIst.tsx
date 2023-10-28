import React from 'react';
import {View} from 'react-native';
import {Title} from '../../components/Title';

const EmptyLIst = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Title>No movies yet, please add a movie.</Title>
    </View>
  );
};
export {EmptyLIst};
