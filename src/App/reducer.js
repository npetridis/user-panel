import { combineReducers } from 'redux';

import usersReducer from './HomePage/reducers';
import { loaderReducer } from './core/Loader';

const rootReducer = combineReducers({
  users: usersReducer,
  loader: loaderReducer,
});

export { rootReducer };
