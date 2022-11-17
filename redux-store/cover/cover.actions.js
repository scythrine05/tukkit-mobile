import {
  GET_COVER,
  GET_COVER_FAIL,
  GET_COVER_SUCCESS,
} from '../../constants/Constants.js';
import firestore from '@react-native-firebase/firestore';

export const getCover = () => {
  return {
    type: GET_COVER,
  };
};

export const getCoverSuccess = posts => {
  return {
    type: GET_COVER_SUCCESS,
    payload: posts,
  };
};

export const getCoverFail = error => {
  return {
    type: GET_COVER_FAIL,
    payload: error,
  };
};

export const requestCover = () => {
  return async dispatch => {
    dispatch(getCover());
    try {
      const querySnapshot = await firestore().collection('cover').get();
      const chartData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getCoverSuccess(chartData[0]));
    } catch (error) {
      dispatch(getCoverFail(error));
    }
  };
};
