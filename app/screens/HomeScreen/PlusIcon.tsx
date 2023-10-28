import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';

interface Props {
  color?: string;
  size?: number;
}
const PlusIcon: React.FC<Props> = ({color = 'black', size}) => {
  return <FontAwesomeIcon icon={faCirclePlus} size={size} color={color} />;
};

export {PlusIcon};
