import * as types from '../actions/actionTypes';

const initialState = {
  posts: [],
  userPosts: {},
};

const getUserPostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_USER_POSTS_SUCCESS:
      return {
        posts: [...state.posts, ...action.posts],
        userPosts: Object.assign(
          {},
          state.userPosts,
          { [action.userId]: action.posts.reduce((acc, post) => [...acc, post.id], []) }
        ),
      };

    case types.GET_USER_POSTS_ERROR:
      return {
        ...initialState,
        error: action.error,
      };

    default:
      return state;
  }
};

export default getUserPostsReducer;