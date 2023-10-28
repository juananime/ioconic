import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

interface Props {
  children: string;
  numberOfLines?: number;
  textExtraStyle?: StyleProp<TextStyle>;
}
const Title: React.FC<Props> = ({
  children,

  textExtraStyle,
  numberOfLines,
}) => {
  return children.length > 0 ? (
    <Text
      style={textExtraStyle}
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
      allowFontScaling>
      {children}
    </Text>
  ) : null;
};
export {Title};
