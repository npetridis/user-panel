import { combineReducers } from 'redux';

import users from './getUsersReducer';
import comments from './getAllCommentsReducer';
import userPosts from './getUserPostsReducer';

export default combineReducers({
  users,
  userPosts,
  comments,
});
