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

// export function getUserAndTheirFirstPost(userId) {
//   // Again, Redux Thunk will inject dispatch here.
//   // It also injects a second argument called getState() that lets us read the current state.
//   return (dispatch, getState) => {
//     // Remember I told you dispatch() can now handle thunks?
//     return dispatch(getUser(userId)).then(() => {
//       // Assuming this is where the fetched user got stored
//       const fetchedUser = getState().usersById[userId]
//       // Assuming it has a "postIDs" field:
//       const firstPostID = fetchedUser.postIDs[0]
//       // And we can dispatch() another thunk now!
//       return dispatch(getPost(firstPostID))
//     })
//   }
// }