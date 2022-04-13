import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import dummyReducer from './redux';

const store = createStore(
  dummyReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
