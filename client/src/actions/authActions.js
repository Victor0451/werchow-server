import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "../actions/types";
import { returnErrors } from "./errorActions";

//Check token & load user

export const loadUser = () => (dispatch, getState) => {
  //user Loading

  dispatch({ type: USER_LOADING });

  axios
    .get("http://190.231.32.232:5002/api/auth/operador", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//Register user

export const register = ({
  usuario,
  contrasena,
  nombre,
  apellido
}) => dispatch => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //Req body

  const body = JSON.stringify({ usuario, contrasena, nombre, apellido });

  axios
    .post("http://190.231.32.232:5002/api/operador/postoperador", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )

    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//LOGIN

export const login = ({ usuario, contrasena }) => dispatch => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //Req body

  const body = JSON.stringify({ usuario, contrasena });

  axios
    .post("http://190.231.32.232:5002/api/auth/auth", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//LOGOUT

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//SETUP config/headers and token

export const tokenConfig = getState => {
  //Get token from localStorage

  const token = getState().auth.token;

  //Headers

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
