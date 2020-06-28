import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'

import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Reducers/rootReducer';

export const history = createBrowserHistory();

const middlewares = [thunkMiddleware];

export default function configureStore (preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares)
    )
  )
  return { store }
};