import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {SortType} from '../../types/Movies';
interface Props {
  color?: string;
  size?: number;
  sort?: SortType;
}
const SortIcon: React.FC<Props> = ({
  color = 'black',
  size,
  sort = 'ascendant',
}) => {
  return (
    <FontAwesomeIcon
      icon={sort === 'ascendant' ? faArrowUp : faArrowDown}
      size={size}
      color={color}
    />
  );
};
export {SortIcon};
