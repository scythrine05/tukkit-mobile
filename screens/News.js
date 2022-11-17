import React from 'react';
import {SafeAreaView} from 'react-native';

//Containers
import Cards from '../containers/Cards';
import Loader from '../containers/Loader';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {requestPosts} from '../redux-store/posts/posts.actions';

//Constants
import {COLORS} from '../constants/Colors';

//Components
import Container from '../components/ui/Container';

const News = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestPosts());
  }, []);

  return (
    <SafeAreaView>
      {posts.loading ? (
        <Loader />
      ) : (
        <Container height={null}>
          <Cards data={posts.posts} />
        </Container>
      )}
    </SafeAreaView>
  );
};

export default News;
