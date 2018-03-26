import * as types from '../actions/actionTypes';

const initialState = {
  users: [],
};

const getUsersReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        users: action.users,
      };

    case types.GET_USERS_ERROR:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};

export default getUsersReducer;