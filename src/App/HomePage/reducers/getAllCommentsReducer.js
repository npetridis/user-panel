import * as types from '../actions/actionTypes';
import { groupBy } from '../../core/util';

const initialState = {
  comments: [],
  userEmailComments: {},
};

const getAllCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_COMMENTS_SUCCESS:
      return {
        comments: action.comments,
        userEmailComments: groupBy(action.comments.map(comment => ({
            id: comment.id,
            email: comment.email,
          })),
          'email'
        ),
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
