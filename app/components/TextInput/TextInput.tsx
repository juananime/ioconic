import React, {ReactElement, useRef} from 'react';
import {
  TextInput as TextInputBase,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
} from 'react-native';

import {Title} from '../Title';

interface Props {
  placeholder?: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  autoFocus?: boolean;
  onChangeText: (value: string) => void;
  onBlur?: (value: any) => void;
  value: string;
  error?: string;
  rightComponent?: ReactElement<any, any>;
  leftComponent?: ReactElement<any, any>;
  keyboardType?: KeyboardTypeOptions;
  inputTextFieldFontSize?: number;
  inputAccessoryViewID?: string;
  placeHolderStyle?: StyleProp<TextStyle>;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}
const TextInput: React.FC<Props> = ({
  placeholder,
  secureTextEntry = false,
  onChangeText,
  onBlur,
  value,
  error,
  keyboardType,
  autoFocus = false,
  multiline,

  inputAccessoryViewID,

  autoCapitalize = 'sentences',
}) => {
  const textRef = useRef<TextInputBase | undefined>(undefined);

  const onRef = (ref: TextInputBase) => {
    textRef.current = ref;
  };

  return (
    <>
      <TextInputBase
        ref={onRef}
        style={{height: 30}}
        inputAccessoryViewID={inputAccessoryViewID}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        multiline={multiline}
        placeholderTextColor={'#919191'}
        autoCapitalize={autoCapitalize}
      />
      {error && <Title textExtraStyle={{color: 'red'}}>{error}</Title>}
    </>
  );
};
export {TextInput};
