import * as types from '../actions/actionTypes';
import { createIndexOnField, groupBy } from '../../core/util';

const initialState = {
  comments: [],
  userEmailComments: {},
  postComments: {},
};

const getAllCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_COMMENTS_SUCCESS:
      return {
        comments: action.comments,
        userEmailComments: createIndexOnField(action.comments, 'email'),
        postComments: createIndexOnField(action.comments, 'postId'),
      };

    case types.GET_ALL_COMMENTS_ERROR:
      return {
        ...initialState,
        error: action.error,
      };

    default:
      return state;
  }
};

export default getAllCommentsReducer;
