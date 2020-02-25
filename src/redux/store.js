import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';  //used for logging action details when ever any action gets fired

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
