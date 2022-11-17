import {
  GET_POST,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
} from '../../constants/Constants.js';

const initState = {
  loading: false,
  posts: [],
  error: '',
  current: 0,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        loading: true,
      };
    case GET_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: '',
      };
    case GET_POST_FAIL:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
