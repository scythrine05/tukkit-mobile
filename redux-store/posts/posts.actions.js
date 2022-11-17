import {
  GET_POST,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
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
