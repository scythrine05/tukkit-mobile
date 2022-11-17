import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

//Constants
import {DIMENSIONS, FONT} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';

//Components
import Text from './Text';

const Button = props => {
  return (
    <Pressable {...props}>
      <View
        style={{
          ...styles.container,
          backgroundColor: props.disabled ? COLORS.sub_main : COLORS.main,
        }}>
        <Text
          style={styles.text}
          size={14}
          family={FONT.regular}
          color={COLORS.dark_text}>
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    minWidth: DIMENSIONS.width / 2,
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
  },
});

export default Button;
