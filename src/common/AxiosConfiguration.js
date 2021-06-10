import React from "react";
import { isLogin } from "./auth";
import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://node-expresss-api.herokuapp.com/api/v1/",
// });

// instance.defaults.headers.common["Authorization"] = isLogin;
// axios.defaults.headers.post["Content-Type"] = "application/json";

// instance.interceptors.request;

// export default instance;

axios.defaults.baseURL = "https://node-expresss-api.herokuapp.com/api/v1/";
axios.defaults.headers.common["Authorization"] = `Bearer ${isLogin}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
