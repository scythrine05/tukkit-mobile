import React from 'react';
import {View, FlatList, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Lottie from 'lottie-react-native';

//Components
import Post from '../components/ui/Card/Post';
import More from '../components/ui/Card/More';

//Constants
import {DIMENSIONS, FONT} from '../constants/Constants';

_renderItem = ({item, index}) => {
  return item.type === 'post' ? <Post item={item} index={index} /> : <More />;
};

const Cards = ({data}) => {
  return (
    <Carousel
      data={data}
      renderItem={_renderItem}
      sliderWidth={DIMENSIONS.width}
      sliderHeight={DIMENSIONS.height}
      itemWidth={DIMENSIONS.width}
      itemHeight={DIMENSIONS.height}
      vertical={true}
      inactiveSlideOpacity={0.5}
      inactiveSlideScale={1}
      // onEndReached={() => setShow(true)}
      nestedScrollEnabled
      disableIntervalMomentum={true}
      shouldOptimizeUpdates
      enableSnap={true}
    />
  );
};

export default Cards;
