import { combineReducers } from 'redux';

import { users, posts, comments } from './HomePage/reducers';
import { loaderReducer as loader } from './core/components/Loader';

const rootReducer = combineReducers({
  users,
  posts,
  comments,
  loader,
});

export { rootReducer };
