import React from "react";
import { combineReducers } from "redux";
import AuthReducer from "../Reducer/auth/index";
import GetUserReducer from "../Reducer/getUser/index";
import SettingReducer from "../Reducer/setting/index";

const RootReducer = combineReducers({
  authReducer: AuthReducer,
  getUserReducer: GetUserReducer,
  settingReducer: SettingReducer,
});

export default RootReducer;
