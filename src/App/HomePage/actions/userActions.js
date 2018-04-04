import * as api from '../../core/api';
import * as actionCreators from './actionCreators';
import { loading, loadingDone } from '../../core/components/Loader';

export const getUsers = () => dispatch => {
  dispatch(loading());
  return api.getAllUsers()
    .then(response => response.json())
    .then(
      json => {
        dispatch(actionCreators.getUsersSuccess(json));
        dispatch(loadingDone());
      },
      error => {
        dispatch(actionCreators.getUsersError(error));
        dispatch(loadingDone());
      },
    );
};

export const getUserPosts = userId => dispatch => {
  dispatch(loading());
  return api.getUserPosts(userId)
    .then(response => response.json())
    .then(
      json => {
        dispatch(actionCreators.getUserPostsSuccess(userId, json));
        dispatch(loadingDone());
      },
      error => {
        dispatch(actionCreators.getUserPostsError(userId, error));
        dispatch(loadingDone());
      },
    );
};

export const getAllPosts = userId => dispatch => {
  dispatch(loading());
  return api.getAllPosts()
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

// export const getAllUsersData = () => dispatch => {
//   // dispatch(getAllComments());
//   return dispatch(getUsers()) // TODO na tsekarw pws ginetai to chain
//     .then(({ users }) => {
//       users.map(user => {
//         dispatch(getUserPosts(user.id));
//       })
//     });
// };
