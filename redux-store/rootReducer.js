import {combineReducers} from 'redux';

import themeReducer from './theme/theme.reducer';
import postReducer from './posts/posts.reducer';
import coverReducer from './cover/cover.reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  posts: postReducer,
  cover: coverReducer,
});

export default rootReducer;
