import { Auth } from './auth.model';
import * as AuthActions from './auth.actions';

const initialState: Auth = {
  error: null,
  user: null,
};

export function reducer(
  state = initialState,
  action: AuthActions.Actions
): Auth {
  switch (action.type) {
    case AuthActions.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActions.REGISTER:
    case AuthActions.LOGIN:
      return state;
    case AuthActions.SET_ERROR:
      return {
        user: null,
        error: action.payload,
      };
    case AuthActions.LOGOUT:
    case AuthActions.CLEAN_ERROR:
      return {
        user: null,
        error: null,
      };
    default:
      return state;
  }
}
