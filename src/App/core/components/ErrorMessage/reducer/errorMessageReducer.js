import { DISPLAY_ERROR_MESSAGE, HIDE_ERROR_MESSAGE } from '../actions/actionTypes';
import { GET_USERS_ERROR, GET_ALL_POSTS_ERROR, GET_ALL_COMMENTS_ERROR } from '../../../../HomePage/actions/actionTypes';

const initialState = {
  display: false,
  message: '',
};

const errorMessageReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS_ERROR:
    case GET_ALL_POSTS_ERROR:
    case GET_ALL_COMMENTS_ERROR:
    case DISPLAY_ERROR_MESSAGE:
      return {
        display: true,
        message: action.message,
      };

    case HIDE_ERROR_MESSAGE:
      return initialState;

    default:
      return state;
  }
};

export default errorMessageReducer;
