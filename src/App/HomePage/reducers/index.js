import { combineReducers } from 'redux';

import users from './usersReducer';
import comments from './commentsReducer';
import posts from './postsReducer';

export default combineReducers({
  users,
  posts,
  comments,
});
