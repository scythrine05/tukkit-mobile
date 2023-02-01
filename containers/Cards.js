import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Lottie from 'lottie-react-native';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {requestPosts} from '../redux-store/posts/posts.actions';

//Components
import Post from '../components/ui/Card/Post';
import More from '../components/ui/Card/More';

//Constants
import {COLORS} from '../constants/Colors';
import {DIMENSIONS, FONT} from '../constants/Constants';

_renderItem = ({item, index}) => {
  return item.type === 'post' ? <Post item={item} index={index} /> : <More />;
};

const Cards = ({data}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <RefreshControl
      progressBackgroundColor={
        theme.mode == 'light' ? COLORS.light_background : COLORS.dark_background
      }
      colors={[theme.mode == 'light' ? COLORS.light_text : COLORS.dark_text]}
      refreshing={refreshing}
      onRefresh={() => dispatch(requestPosts())}>
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
    </RefreshControl>
  );
};

export default Cards;
