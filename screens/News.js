import React from 'react';
import {SafeAreaView, View, StyleSheet, Pressable} from 'react-native';

//Containers
import Cards from '../containers/Cards';
import Loader from '../containers/Loader';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {requestPosts, postListner} from '../redux-store/posts/posts.actions';

//Constants
import {COLORS} from '../constants/Colors';
import {DIMENSIONS, FONT} from '../constants/Constants';

//Components
import Container from '../components/ui/Container';
import Text from '../components/basic/Text';
import PostListner from '../components/ui/PostListner';

const News = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let mount = true;
    if (mount) {
      dispatch(requestPosts());
      dispatch(postListner());
    }
    return () => (mount = false);
  }, []);
  return (
    <SafeAreaView>
      {posts.loading ? (
        <Loader />
      ) : (
        <Container height={null}>
          <Cards data={posts.posts} />
          {posts.added > 0 ? <PostListner /> : null}
        </Container>
      )}
    </SafeAreaView>
  );
};

export default News;
