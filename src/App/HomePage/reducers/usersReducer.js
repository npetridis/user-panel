import * as types from '../actions/actionTypes';

const initialState = {
  users: [],
  error: null,
};

const getUsersReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        users: action.users,
        error: null,
      };

    case types.GET_USERS_ERROR:
      return {
        users: [],
        error: action.error,
      };

    default:
      return state;
  }
};

export default getUsersReducer;