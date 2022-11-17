import React from 'react';
import {Text, StyleSheet} from 'react-native';

//Redux
import {useSelector} from 'react-redux';

//Constants
import {COLORS} from '../../constants/Colors';

const Text_Component = ({size, style, family, color, children, height}) => {
  const theme = useSelector(state => state.theme);
  return (
    <Text
      style={{
        ...style,
        fontFamily: family,
        fontSize: size,
        color: color
          ? color
          : theme.mode == 'light'
          ? COLORS.light_text
          : COLORS.dark_text,
        lineHeight: height ? size + 12 : null,
      }}>
      {children}
    </Text>
  );
};

export default Text_Component;
