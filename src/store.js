import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {challenges} from './state/challenges';

const logger = store => next => action => {
  console.group(action.type);
  console.log('prev state', store.getState());
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result
};

const middleware = applyMiddleware(thunk, logger);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);

const combinedReducers = combineReducers({
  challenges,
});

const store = createStore(combinedReducers, enhancer);

export default store;