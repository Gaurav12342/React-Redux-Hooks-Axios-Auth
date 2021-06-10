import React from "react";
import {
  BOOTCAMP_FAILED,
  BOOTCAMP_SUCCESS,
  CREATE_BOOTCAMP_SUCCESS,
  CREATE_BOOTCAMP_FAILED,
} from "../../Constant";
// import axios from "axios";
import AxiosConfiguation from "../../../common/AxiosConfiguration";
import {
  bootcampPaginate,
  bootcampCreate,
} from "../../../services/api/routes/setting";
import { isLogin } from "../../../common/auth";

export const bootcampPagination = () => {
  return (dispatch) => {
    let { method, url } = bootcampPaginate;
    AxiosConfiguation({ method, url })
      .then((response) => {
        if (response?.statusText == "OK") {
          dispatch({ type: BOOTCAMP_SUCCESS, payload: response.data });
          //   Notification("success", "You are login successfully.");
          //   props.history.push(routes.dashboard.path);
        }
      })
      .catch((error) => {
        dispatch({ type: BOOTCAMP_FAILED, payload: "Something bad heppan" });
        // Notification("error", "Something bad heppan");
      });
  };
};

export const createBootcap = (values) => {
  return (dispatch) => {
    let { method, url } = bootcampCreate;
    AxiosConfiguation({ method, url, data: values })
      .then((response) => {
        console.log(
          "🚀 ~ file: index.js ~ line 31 ~ .then ~ response",
          response
        );
        if (response?.statusText == "OK") {
          // dispatch({ type: CREATE_BOOTCAMP_SUCCESS, payload: response.data });
          //   Notification("success", "You are login successfully.");
          //   props.history.push(routes.dashboard.path);
        }
      })
      .catch((error) => {
        dispatch({
          type: CREATE_BOOTCAMP_FAILED,
          payload: "Something bad heppan",
        });
        // Notification("error", "Something bad heppan");
      });
  };
};
