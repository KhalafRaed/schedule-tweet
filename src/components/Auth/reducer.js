import * as AT from './actionsTypes';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AT.SIGN_UP_ACTION:
      return {...state, isLoading: true};
    case AT.LOGIN_ACTION:
      return {...state, isLoading: true};
    case AT.LOGIN_FAILURE:
      return {...state, isLoading: false};
    case AT.LOGIN_SUCCESS:
      return {...state, isLoading: false};
    case AT.SIGN_UP_FAILURE:
      return {...state, isLoading: false};
    case AT.SIGN_UP_SUCCESS:
      return {...state, isLoading: false};
    default:
      return state;
  }
};
