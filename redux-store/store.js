import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

// Create a store with the reducer.
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

// Export the configured store
export default configureStore;
