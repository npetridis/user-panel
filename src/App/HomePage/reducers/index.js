import { combineReducers } from 'redux';

import users from './getUsersReducer';
import comments from './getAllCommentsReducer';
import posts from './getUserPostsReducer';

export default combineReducers({
  users,
  posts,
  comments,
});
