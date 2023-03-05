import {
  GET_POST,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  LISTEN_POST,
} from '../../constants/Constants.js';
import firestore from '@react-native-firebase/firestore';

export const getPosts = () => {
  return {
    type: GET_POST,
  };
};

export const getPostsSuccess = posts => {
  return {
    type: GET_POST_SUCCESS,
    payload: posts,
  };
};

export const getPostsFail = error => {
  return {
    type: GET_POST_FAIL,
    payload: error,
  };
};

export const listenPost = count => {
  return {
    type: LISTEN_POST,
    payload: count,
  };
};

export const requestPosts = () => {
  return async dispatch => {
    dispatch(getPosts());
    try {
      const querySnapshot = await firestore()
        .collection('posts')
        .orderBy('created', 'desc')
        .get();
      const chartData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getPostsSuccess(chartData));
    } catch (error) {
      dispatch(getPostsFail(error));
    }
  };
};

export const postListner = () => {
  return (dispatch, getState) => {
    try {
      firestore()
        .collection('posts')
        .where('created', '>', new Date())
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            console.log(getState().posts.added);
            if (change.type === 'added') {
              dispatch(listenPost(getState().posts.added + 1));
            }
          });
        });
    } catch (error) {
      dispatch(getPostsFail(error));
    }
  };
};
+