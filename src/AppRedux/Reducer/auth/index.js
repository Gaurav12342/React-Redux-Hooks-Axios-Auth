import React from "react";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "../../Constant";

const initialState = {
  loading: true,
  loginResponse: {},
  error: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: action.payload,
        loading: false,
        error: "",
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loginResponse: action.payload,
        loading: false,
      };

    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registerResponse: action.payload,
        loading: false,
        error: "",
      };

    case REGISTRATION_FAILED:
      return {
        ...state,
        registerResponse: action.payload,
        loading: false,
        error: "",
      };

    default:
      return { ...state };
      break;
  }
};

export default AuthReducer;
