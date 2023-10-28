import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

interface Props {
  color?: string;
  size?: number;
}
const EditIcon: React.FC<Props> = ({color = 'black', size}) => {
  return <FontAwesomeIcon icon={faEdit} size={size} color={color} />;
};

export {EditIcon};
