import React from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "../login/Login";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { loginApi } from "../../services/api/routes/login";
import { routes } from "../../routes/constant";
import Notification from "../../components/Layout/Notification";
import { login } from "../../AppRedux/Action/auth/index";

const Login = (props) => {
  const getLoginResponse = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(login(data, props));

    // let { method, url } = loginApi;
    // axios({ method, url, data: data })
    //   .then((response) => {
    //     if (response?.statusText == "OK") {
    //       localStorage.setItem("userToken", response.data.token);
    //       Notification("success", response?.statusText);
    //       props.history.push(routes.dashboard.path);
    //     }
    //   })
    //   .catch((error) => {
    //     Notification("error", "Something bad heppan");
    //   });
  };
  return (
    <>
      <LoginForm
        onSubmit={handleSubmit}
        getLoginResponse={getLoginResponse}
      />
    </>
  );
};

export default withRouter(Login);
