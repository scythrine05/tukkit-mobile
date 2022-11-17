import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

//Redux
import {useSelector} from 'react-redux';

//Constants
import {FONT} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';

const TextInput_Component = props => {
  const theme = useSelector(state => state.theme);

  return (
    <TextInput
      {...props}
      style={{
        ...props.style,
        ...styles.input,
        backgroundColor:
          theme.mode == 'light'
            ? COLORS.light_background
            : COLORS.dark_background,
        borderColor:
          theme.mode == 'light' ? COLORS.light_text : COLORS.dark_text,
        color: theme.mode == 'light' ? COLORS.light_text : COLORS.dark_text,
      }}
      onChangeText={props.onChangeText}
      placeholderTextColor={COLORS.gray_black}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderRadius: 8,
    textAlignVertical: 'top',
    fontFamily: FONT.regular,
  },
});

export default TextInput_Component;
