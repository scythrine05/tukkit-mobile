import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

//Redux
import {useDispatch} from 'react-redux';
import {requestPosts} from '../../redux-store/posts/posts.actions';

//Constants
import {COLORS} from '../../constants/Colors';
import {DIMENSIONS, FONT} from '../../constants/Constants';
import {ARROW_UPWARD_SIMPLE} from '../../constants/Icons';

//Components
import Text from '../../components/basic/Text';

const PostListner = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.post_listner}>
      <Pressable onPress={() => dispatch(requestPosts())}>
        <View style={styles.post_listner_}>
          <Text
            size={13}
            family={FONT.semi_bold}
            color={{
              dark: COLORS.dark_text,
              light: COLORS.dark_text,
            }}>
            New Feeds
          </Text>
          <ARROW_UPWARD_SIMPLE size={16} color={COLORS.dark_text} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  post_listner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: DIMENSIONS.height / 20,
    alignItems: 'center',
  },
  post_listner_: {
    backgroundColor: COLORS.main,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostListner;
