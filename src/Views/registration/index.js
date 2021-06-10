import React from "react";
import Registration from "./Registration";
import { useSelector, useDispatch } from "react-redux";
import { registration } from "../../AppRedux/Action/auth/index";

const Register = (props) => {
  const getRegisterResponse = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(registration(data, props));
  };

  return (
    <Registration
      onSubmit={handleSubmit}
      getRegisterResponse={getRegisterResponse}
    />
  );
};
export default Register;
