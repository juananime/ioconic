import React from 'react';
import {Pressable} from 'react-native';
import {PlusIcon} from './PlusIcon';
import {Title} from '../../components/Title';
import {addNewMoviewStyles as styles} from './styles/styles';

interface Props {
  onPress: () => void;
}
const AddNewMovieComponent: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <Title>Add new movie.</Title>
      <PlusIcon size={30} />
    </Pressable>
  );
};

export {AddNewMovieComponent};
