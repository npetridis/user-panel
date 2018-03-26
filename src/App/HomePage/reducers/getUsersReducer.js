import * as types from '../actions/actionTypes';

const initialState = {
  users: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_USERS:
      return {
        ...state,
        loading: true,
      };

    case types.GET_USERS_SUCCESS:
      return {
        users: action.users,
        loading: false,
      };

    case types.GET_USERS_ERROR:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;