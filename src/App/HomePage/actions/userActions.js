import * as api from '../../core/api';
import * as actionCreators from './actionCreators';

export const getUsers = () => dispatch => {
  dispatch(actionCreators.getUsers());
  return api.getAllUsers()
    .then(response => response.json())
    .then(
      json => dispatch(actionCreators.getUsersSuccess(json)),
      error => dispatch(actionCreators.getUsersError(error)),
    );
};

export const getUserPosts = userId => dispatch => {
  dispatch(actionCreators.getUserPosts());
  return api.getUserPosts(userId)
    .then(response => response.json())
    .then(
      json => dispatch(actionCreators.getUserPostsSuccess(userId, json)),
      error => dispatch(actionCreators.getUserPostsError(userId, error)),
    );
};

export const getAllComments = () => dispatch => {
  dispatch(actionCreators.getAllComments());
  return api.getAllComments()
    .then(response => response.json())
    .then(
      json => dispatch(actionCreators.getAllCommentsSuccess(json)),
      error => dispatch(actionCreators.getAllCommentsError(error)),
    );
};

export const getAllUsersData = () => dispatch => {
  // dispatch(getAllComments());
  return dispatch(getUsers())
    .then(({ users }) => {
      console.log('received users', users);
      users.map(user => {
        dispatch(getUserPosts(user.id));
      })
    });
};
