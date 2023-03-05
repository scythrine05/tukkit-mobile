import {
  GET_POST,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  LISTEN_POST,
} from '../../constants/Constants.js';

const initState = {
  loading: false,
  posts: [],
  error: '',
  added: 0,
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
        added: 0,
        loading: false,
        posts: action.payload,
        error: '',
      };
    case GET_POST_FAIL:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    case LISTEN_POST:
      return {
        ...state,
        added: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
