import { getAllUsers } from '../../core/api';

import * as types from './actionTypes';

/*
 * Action Creators
 */

const getUsersInit = () => ({ type: types.GET_USERS});

const getUsersSuccess = users => ({
  type: types.GET_USERS_SUCCESS,
  users,
});

const getUsersError = error => ({
  type: types.GET_USERS_ERROR,
  error,
});

/*
 * Thunks
 */

export const getUsers = () => dispatch => {
  console.log('getting users');
  dispatch(getUsersInit());
  getAllUsers()
    .then(response => response.json())
    .then(json => dispatch(getUsersSuccess(json)),
      error => dispatch(getUsersError(error))
    )
};