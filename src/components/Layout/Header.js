import React from "react";
import { Layout, Menu, PageHeader, Tabs, Button } from "antd";
import { withRouter, NavLink } from "react-router-dom";
import Demo1 from "../Layout/Demo1";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { routes } from "../../routes/constant";

import Setting from "../../Views/setting/index";
import Dashboard from "../../Views/dashboard/index";
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

const HeaderFile = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    props.history.push(routes.login.path);
  };

  const sidebar = [
    {
      key: 1,
      path: routes.dashboard.path,
      value: "Dashboard",
      icon: <UserOutlined />,
    },
    {
      key: 2,
      path: routes.addBootcamp.path,
      value: "Settings",
    },
  ];
  return (
    <>
      <PageHeader
        className="site-page-header"
        title={<h3>Dashboard</h3>}
        extra={[
          <h1>
            <LogoutOutlined onClick={() => handleLogout()} />
          </h1>,
        ]}
      />
      <Tabs defaultActiveKey="1">
        <TabPane
          tab="Dashboard"
          key="1"
          onClick={() => {
            alert("abc");
          }}
        >
          <Dashboard />
        </TabPane>
        <TabPane tab="Setting" key="2">
          <Setting />
        </TabPane>
      </Tabs>
    </>
  );
};
export default HeaderFile;
