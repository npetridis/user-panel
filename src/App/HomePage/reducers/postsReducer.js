import * as types from '../actions/actionTypes';
import { groupBy } from '../../core/util';

const initialState = {
  posts: [],
  userPosts: {},
};

const getAllPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS_SUCCESS:
      return {
        posts: action.posts,
        userPosts: groupBy(
          action.posts.map(({ id, userId }) => ({
            id,
            userId,
          })),
          'userId',
        ),
      };

    case types.GET_ALL_POSTS_ERROR:
      return {
        ...initialState,
        error: action.error,
      };

    default:
      return state;
  }
};

export default getAllPostsReducer;