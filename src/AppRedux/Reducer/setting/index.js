import React from "react";
import {
  BOOTCAMP_FAILED,
  BOOTCAMP_SUCCESS,
  CREATE_BOOTCAMP_SUCCESS,
  CREATE_BOOTCAMP_FAILED,
} from "../../Constant";

const initialState = {
  loading: true,
  bootcampResponse: {},
  error: "",
};

const SettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOTCAMP_SUCCESS:
      return {
        ...state,
        bootcampResponse: action.payload,
        loading: false,
        error: "",
      };
      break;

    case BOOTCAMP_FAILED:
      return {
        ...state,
        bootcampoResponse: action.payload,
        loading: false,
        error: "Something bad heppan.",
      };
      break;

    case CREATE_BOOTCAMP_SUCCESS:
      return {
        ...state,
        createBootcampResponse: action.payload,
        loading: false,
        error: "",
      };
      break;

    case CREATE_BOOTCAMP_FAILED:
      return {
        ...state,
        createBootcampResponse: action.payload,
        loading: false,
        error: "Something bad heppan.",
      };
      break;

    default:
      return { ...state };
      break;
  }
};

export default SettingReducer;
