import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';

//Redux
import {useSelector} from 'react-redux';

//Constants
import {COLORS} from '../../constants/Colors';

//Icons
import {STAR} from '../../constants/Icons';

const Ratings = ({onRate}) => {
  const theme = useSelector(state => state.theme);
  return (
    <View>
      <Rating
        type={'custom'}
        style={styles.ratings}
        ratingBackgroundColor={
          theme.mode == 'light' ? COLORS.gray_white : COLORS.gray_black
        }
        startingValue={0}
        ratingColor={COLORS.main}
        tintColor={
          theme.mode == 'light'
            ? COLORS.light_background
            : COLORS.dark_background
        }
        fractions={1}
        imageSize={40}
        onFinishRating={rate => onRate(rate)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ratings: {
    border: 'none',
    paddingVertical: 20,
    alignItems: 'flex-start',
  },
});

export default Ratings;
