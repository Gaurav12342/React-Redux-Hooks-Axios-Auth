import React from "react";
import { GET_USER_FAILED, GET_USER_SUCCESS } from "../../Constant";

const initialState = {
  loading: true,
  userResponse: {},
  error: "",
};

const GetUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        loginResponse: action.payload,
        loading: false,
        error: "",
      };

    case GET_USER_FAILED:
      return {
        ...state,
        loginResponse: action.payload,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default GetUserReducer;
