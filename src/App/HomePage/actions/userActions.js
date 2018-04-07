import * as api from '../../core/api';
import * as actionCreators from './actionCreators';
import { loading, loadingDone } from '../../core/components/Loader';

const handleError = function(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getUsers = () => dispatch => {
  dispatch(loading());
  return api.getAllUsers()
    .then(handleError)
    .then(response => response.json())
    .then(
      json => {
        dispatch(actionCreators.getUsersSuccess(json));
        dispatch(loadingDone());
      },
      error => {
        console.log(error);
        dispatch(actionCreators.getUsersError(error.message));
        dispatch(loadingDone());
      },
    );
};

export const getAllPosts = userId => dispatch => {
  dispatch(loading());
  return api.getAllPosts()
    .then(handleError)
    .then(response => response.json())
    .then(
      json => {
        dispatch(actionCreators.getAllPostsSuccess(json));
        dispatch(loadingDone());
      },
      error => {
        dispatch(actionCreators.getAllPostsError(error));
        dispatch(loadingDone());
      },
    );
};

export const getAllComments = () => dispatch => {
  dispatch(loading());
  return api.getAllComments()
    .then(handleError)
    .then(response => response.json())
    .then(
      json => {
        dispatch(actionCreators.getAllCommentsSuccess(json));
        dispatch(loadingDone());
      },
      error => {
        dispatch(actionCreators.getAllCommentsError(error));
        dispatch(loadingDone());
      },
    );
};
