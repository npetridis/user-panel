import * as actions from './actionTypes';

export const dispayErrorMessage = message => ({
  type: actions.DISPLAY_ERROR_MESSAGE,
  message,
});

export const hideErrorMessage = () => ({
  type: actions.HIDE_ERROR_MESSAGE,
});
