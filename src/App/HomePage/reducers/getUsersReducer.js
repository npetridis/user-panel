import * as types from '../actions/actionTypes';

const initialState = {
  users: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_USERS:
      console.log('start fetching');
      return {
        ...state,
        loading: true,
      };

    case types.GET_USERS_SUCCESS:
      console.log('fetching success', action.users);
      return {
        users: action.users,
        loading: false,
      };

    case types.GET_USERS_ERROR:
      console.log('fetching error');
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;