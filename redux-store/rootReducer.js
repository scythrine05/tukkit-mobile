import {combineReducers} from 'redux';

import themeReducer from './theme/theme.reducer';
import postReducer from './posts/posts.reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  posts: postReducer,
});

export default rootReducer;
