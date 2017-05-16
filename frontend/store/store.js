import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;

// * DEV TOOLS*
// if (process.env.NODE_ENV !== 'production') {
//   // must use 'require' (import only allowed at top of file)
//   const createLogger = require('redux-logger');
//   middlewares.push(createLogger());
// }
