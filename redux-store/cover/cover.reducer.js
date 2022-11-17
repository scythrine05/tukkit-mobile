import {
  GET_COVER,
  GET_COVER_FAIL,
  GET_COVER_SUCCESS,
} from '../../constants/Constants.js';

const initState = {
  loading: false,
  cover: {},
  error: '',
};

const coverReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_COVER:
      return {
        ...state,
        loading: true,
      };
    case GET_COVER_SUCCESS:
      return {
        loading: false,
        cover: action.payload,
        error: '',
      };
    case GET_COVER_FAIL:
      return {
        loading: false,
        cover: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default coverReducer;
