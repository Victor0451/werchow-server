import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGEDED
} from "../actions/types";

const initialState = {
  token: sessionStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };

    case USER_LOGEDED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: JSON.parse(sessionStorage.getItem("user"))
      };

    case LOGIN_SUCCESS:

    case REGISTER_SUCCESS:
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };

    case AUTH_ERROR:

    case LOGIN_FAIL:

    case LOGOUT_SUCCESS:

    case REGISTER_FAIL:
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
