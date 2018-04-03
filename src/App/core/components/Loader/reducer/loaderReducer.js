import * as types from '../actions/actionTypes';

const loaderReducer = (state = 0, action) => {
  switch (action.type) {
    case types.LOADING:
      return state + 1;

    case types.LOADING_DONE:
      return state - 1;

    default:
      return state;
  }
};

export default loaderReducer;
