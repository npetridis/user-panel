import { combineReducers } from 'redux';

import usersReducer from './HomePage/reducers';
import { loaderReducer } from './core/Loader';

console.log('reducer', usersReducer);

const allReducers = Object.assign(
  {},
  usersReducer,
  loaderReducer
);
const reducer = combineReducers(allReducers);

const rootReducer = combineReducers(allReducers);

export { rootReducer };
