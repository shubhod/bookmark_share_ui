import React, { useState } from "react";
import { Layout, Space, Menu } from "antd";
import { Editor } from "../TextEditor/Editor";
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
        <Menu theme="dark" mode="inline" selectable={false}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">nav 4</Menu.Item>
        </Menu>
      </Sider>
      <Sider style={{ marginLeft: 210 }} className="AllNotes_Sider">
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
        {/* <Editor /> */}
      </Content>
    </Layout>
  );
};
export default AllNotes;
