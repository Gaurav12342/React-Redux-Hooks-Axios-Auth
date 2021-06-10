import React from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu, PageHeader, Tabs, Button } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

const PageContent = (props) => {
  return <Content style={{ margin: "24px 16px 0" }}>{props.children}</Content>;
};

export default withRouter(PageContent);
