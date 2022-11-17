import React from 'react';
import {View} from 'react-native';

//Redux
import {useSelector} from 'react-redux';

//Constants
import {COLORS} from '../../constants/Colors';
import {DIMENSIONS} from '../../constants/Constants';

const Container = ({children, style, height}) => {
  const theme = useSelector(state => state.theme);
  return (
    <View
      style={{
        ...style,
        backgroundColor:
          theme.mode == 'light'
            ? COLORS.light_background
            : COLORS.dark_background,
        height: height ? height : DIMENSIONS.height,
      }}>
      {children}
    </View>
  );
};

export default Container;
