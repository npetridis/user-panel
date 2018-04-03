import * as api from '../../core/api';
import * as actionCreators from './actionCreators';
import { loading, loadingDone } from '../../core/Loader';

export const getUsers = () => dispatch => {
  // dispatch(loading());
  return api.getAllUsers()
    .then(response => response.json())
    .then(
      json => dispatch(actionCreators.getUsersSuccess(json)),
      error => dispatch(actionCreators.getUsersError(error)),
    );
};

export const getUserPosts = userId => dispatch => {
  dispatch(loading());
  return api.getUserPosts(userId)
    .then(response => response.json())
    .then(
      json => {
        dispatch(loadingDone());
        dispatch(actionCreators.getUserPostsSuccess(userId, json));
      },
      error => {
        dispatch(loadingDone());
        dispatch(actionCreators.getUserPostsError(userId, error));
      },
    );
};

export const getAllPosts = userId => dispatch => {
  dispatch(loading());
  return api.getAllPosts()
    .then(response => response.json())
    .then(
      json => {
        dispatch(loadingDone());
        dispatch(actionCreators.getAllPostsSuccess(json));
      },
      error => {
        dispatch(loadingDone());
        dispatch(actionCreators.getAllPostsError(error));
      },
    );
};

export const getAllComments = () => dispatch => {
  dispatch(loading());
  return api.getAllComments()
    .then(response => response.json())
    .then(
      json => {
        dispatch(loadingDone());
        dispatch(actionCreators.getAllCommentsSuccess(json));
      },
      error => {
        dispatch(loadingDone());
        dispatch(actionCreators.getAllCommentsError(error));
      }
    );
};

export const getAllUsersData = () => dispatch => {
  // dispatch(getAllComments());
  return dispatch(getUsers()) // TODO na tsekarw pws ginetai to chain
    .then(({ users }) => {
      users.map(user => {
        dispatch(getUserPosts(user.id));
      })
    });
};
