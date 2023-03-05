import React from 'react';
import {Text, StyleSheet, PixelRatio} from 'react-native';

//Redux
import {useSelector} from 'react-redux';

//Constants
import {COLORS} from '../../constants/Colors';

//Utils
import {normalize} from '../../utils/normalize';

const Text_Component = ({size, style, family, color, children, height}) => {
  const theme = useSelector(state => state.theme);

  return (
    <Text
      style={{
        ...style,
        fontFamily: family,
        fontSize: normalize(size),
        color: color
          ? theme.mode == 'light'
            ? color.light
            : color.dark
          : theme.mode == 'light'
          ? COLORS.light_text
          : COLORS.dark_text,
        lineHeight: height ? size + 10 : null,
      }}>
      {children}
    </Text>
  );
};

export default Text_Component;
