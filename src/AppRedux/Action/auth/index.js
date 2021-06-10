import React from "react";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "../../Constant";
import axios from "axios";
import { loginApi, registrationApi } from "../../../services/api/routes/login";
import { routes } from "../../../routes/constant";
import Notification from "../../../components/Layout/Notification";

export const login = (values, props) => {
  return (dispatch) => {
    let { method, url } = loginApi;
    axios({ method, url, data: values })
      .then((response) => {
        if (response?.statusText == "OK") {
          dispatch({ type: LOGIN_SUCCESS, payload: response.data });
          localStorage.setItem("userToken", response.data.token);
          Notification("success", "You are login successfully.");
          props.history.push(routes.dashboard.path);
        }
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAILED, payload: "Something bad heppan" });
        Notification("error", "Something bad heppan");
      });
  };
};

export const registration = (values, props) => {
  return (dispatch) => {
    let { method, url } = registrationApi;
    axios({ method, url, data: values })
      .then((response) => {
        console.log(
          "🚀 ~ file: index.js ~ line 37 ~ .then ~ response",
          response
        );

        if (response?.statusText == "OK") {
          dispatch({ type: REGISTRATION_SUCCESS, payload: response.data });
          props.history.push(routes.login.path);
          // localStorage.setItem("userToken", response.data.token);
          // Notification("success", "You are login successfully.");
        }
      })
      .catch((error) => {
        dispatch({
          type: REGISTRATION_FAILED,
          payload: "Something bad heppan",
        });
        Notification("error", "Something bad heppan");
      });
  };
};
