import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

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

store.subscribe(() => localStorage.setItem('login', JSON.stringify(store.getState().login)));
export default store;
