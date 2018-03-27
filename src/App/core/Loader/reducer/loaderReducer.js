import * as types from '../actions/actionTypes';

const initialState = {
  counter: 0,
  isLoading: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      const incCounter = state.counter + 1;
      return {
        counter: incCounter,
        isLoading: !!incCounter,
      };

    case types.LOADING_DONE:
      const decCounter = state.counter - 1;
      return {
        counter: decCounter,
        isLoading: !!decCounter,
      };

    default:
      return state;
  }
};

export default loaderReducer;
