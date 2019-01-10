import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

// const middleware = process.env.NODE_ENV !== 'production'
//   ? [require('redux-immutable-state-invariant').default(), thunk]
//   : [thunk];

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({ collapsed: true });
  middleware.push(require('redux-immutable-state-invariant').default());
  middleware.push(logger);
}

/**
 * @param {*} initialState
 * @return {*} createStore
 */
function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );
}

const store = configureStore();
window.store = store;

store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));
export default store;
