import * as types from './actionTypes';

export const getUsersSuccess = users => ({
  type: types.GET_USERS_SUCCESS,
  users,
});

export const getUsersError = error => ({
  type: types.GET_USERS_ERROR,
  error,
});


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


export const getAllPostsSuccess = posts => ({
  type: types.GET_ALL_POSTS_SUCCESS,
  posts,
});

export const getAllPostsError = error => ({
  type: types.GET_ALL_POSTS_ERROR,
  error,
});



export const getAllCommentsSuccess = comments => ({
  type: types.GET_ALL_COMMENTS_SUCCESS,
  comments,
});

export const getAllCommentsError = error => ({
  type: types.GET_ALL_COMMENTS_ERROR,
  error,
});
