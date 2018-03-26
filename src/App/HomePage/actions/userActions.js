import { getAllUsers } from '../../core/api';

import * as types from './actionTypes';

/*
 * Action Creators
 */

const getUsersInit = () => ({
  type: types.GET_USERS,
});

const getUsersSuccess = users => ({
  type: types.GET_USERS_SUCCESS,
  users,
});

const getUsersError = error => ({
  type: types.GET_USERS_ERROR,
  error,
});

const getUserPostsInit = userId => ({
  type: types.GET_USER_POSTS,
  userId,
});

const getUserPostsSuccess = (userId, posts) => ({
  type: types.GET_USER_POSTS_SUCCESS,
  userId,
  posts,
});

const getUserPostsError = (userId, error) => ({
  type: types.GET_USER_POSTS_SUCCESS,
  userId,
  error,
});


/*
 * Thunks
 */

export const getUsers = () => dispatch => {
  dispatch(getUsersInit());
  getAllUsers()
    .then(response => response.json())
    .then(
      json => dispatch(getUsersSuccess(json)),
      error => dispatch(getUsersError(error)),
    );
};

export const getUserPosts = userId => dispatch => {
  dispatch(getUsersInit());
  getAllUsers()
    .then(response => response.json())
    .then(
      json => dispatch(getUsersSuccess(json)),
      error => dispatch(getUsersError(error)),
    );
};