import React from "react";
import { GET_USER_FAILED, GET_USER_SUCCESS } from "../../Constant";
import { currentUser } from "../../../services/api/routes/currentUser";
import { isLogin } from "../../../common/auth";
// import axios from "axios";
import AxiosConfiguation from "../../../common/AxiosConfiguration";

export const getUser = () => {
  return (dispatch) => {
    let { method, url } = currentUser;
    AxiosConfiguation({ method, url })
      .then((response) => {
        if (response?.statusText == "OK") {
          dispatch({ type: GET_USER_SUCCESS, payload: response.data });
          //   Notification("success", "You are login successfully.");
          //   props.history.push(routes.dashboard.path);
        }
      })
      .catch((error) => {
        dispatch({ type: GET_USER_FAILED, payload: "Something bad heppan" });
        // Notification("error", "Something bad heppan");
      });
  };
};
