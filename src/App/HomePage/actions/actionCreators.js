import * as types from './actionTypes';

// export const getUsers = () => ({
//   type: types.GET_USERS,
// });

export const getUsersSuccess = users => ({
  type: types.GET_USERS_SUCCESS,
  users,
});

export const getUsersError = error => ({
  type: types.GET_USERS_ERROR,
  error,
});


// export const getUserPosts = userId => ({
//   type: types.GET_USER_POSTS,
//   userId,
// });

export const getUserPostsSuccess = (userId, posts) => ({
  type: types.GET_USER_POSTS_SUCCESS,
  userId,
  posts,
});

export const getUserPostsError = (userId, error) => ({
  type: types.GET_USER_POSTS_ERROR,
  userId,
  error,
});


// export const getAllComments = userId => ({
//   type: types.GET_ALL_COMMENTS,
//   userId,
// });

export const getAllCommentsSuccess = comments => ({
  type: types.GET_ALL_COMMENTS_SUCCESS,
  comments,
});

export const getAllCommentsError = error => ({
  type: types.GET_ALL_COMMENTS_ERROR,
  error,
});
