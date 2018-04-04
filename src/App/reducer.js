import { combineReducers } from 'redux';

import { users, posts, comments } from './HomePage/reducers';
import { loaderReducer as loader } from './core/components/Loader';
import { errorMessageReducer as errorMessage } from './core/components/ErrorMessage';

const rootReducer = combineReducers({
  users,
  posts,
  comments,
  loader,
  errorMessage,
});

export { rootReducer };
