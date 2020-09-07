import React, { useState } from "react";
import { Layout, Space, Menu } from "antd";
import { ViewMenuItems } from "../../components/TextEditor/MenuItems/ViewMenuItems";
import "./ScssAllNotes.scss";
const { Content, Sider } = Layout;
var AllNotes = () => {
  const { SubMenu } = Menu;
  const [contentMargin, setcontentMargin] = useState({
    left: "460px",
    right: "0px",
    top: "0px",
    down: "0px",
  });
  
  const [contentPadding, setcontentPadding] = useState({
    left: "0px",
    right: "0px",
    top: "0px",
    down: "0px",
  });
  return (
    <Layout>
      <Sider
        className="AllNotes_Sider"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectable={false}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">nav 4</Menu.Item>
        </Menu>
      </Sider>
      <Sider style={{ marginLeft: 210 }} className="AllNotes_Sider">
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectable={false}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">nav 4</Menu.Item>
        </Menu>
      </Sider>
      <Content
        style={{
          margin: `0px 0px 0px ${contentMargin.left}`,
          padding: "0px 0px 0px 0px",
        }}
      >
        <ViewMenuItems />
      </Content>
    </Layout>
  );
};
export default AllNotes;
