import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./constant";
import PrivateRoute from "../routes/PrivateRoute";
import HeaderPage from "../components/Layout/Header";
import PageContent from "../components/Layout/PageContent";
// import Demo from "../components/view/Demo";
// import Register from "../Views/registration/index";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, PageHeader, Tabs, Button } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

const login = React.lazy(() => import("../Views/login/index"));
const demoData = React.lazy(() => import("../components/Layout/Header"));
const registration = React.lazy(() => import("../Views/registration/index"));
const createBootcamp = React.lazy(() =>
  import("../Views/setting/components/AddBootcamp")
);
// const demo1Data = React.lazy(() => import("../components/view/Demo1"));

const Router = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.login.path} component={login} />
          <Route
            exact
            path={routes.registration.path}
            component={registration}
          />
          <PrivateRoute
            exact
            path={routes.dashboard.path}
            component={demoData}
          />
          <PrivateRoute
            exact
            path={routes.addBootcamp.path}
            component={createBootcamp}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
