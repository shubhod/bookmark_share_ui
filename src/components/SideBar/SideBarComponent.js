import React from "react";
import Sider from "antd/lib/layout/Sider";
import { Menu, Input, Button, Space } from "antd";
import { MenuItemsComponent } from "../MenuItems/MenuItemsComponent";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import "./SideBarStyles.scss";
const SideBar = (props) => {
  let { menuProps, siderClassName } = props;
  const MenuItems = MenuItemsComponent(menuProps);
  return (
    <Sider
      className={siderClassName}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Space>
        <img
          className="mainScreenSideBar_img_logo"
          src="/images/mainScreen/logo.png"
          alt=""
        />
        <span className="mainScreenSideBar_logo_heading">FlashNotes</span>
      </Space>
      <Menu
        theme="dark"
        mode="inline"
        selectable={false}
        className="mainScreenSideBar__Menu"
      >
        <Menu.Item >
          <Input
            size="medium"
            placeholder="search for notes"
            prefix={<SearchOutlined />}
          />
          <br />
        </Menu.Item>
        <Menu.Item style={{marginBottom:"20px"}}>
          <Button
            block
            type="primary"
            className="btnAddNotes"
            icon={<PlusOutlined className="icnPlusOutlined" />}
            size="large"
          >
            add Notes
          </Button>
        </Menu.Item>
        {MenuItems}
      </Menu>
    </Sider>
  );
};

export default SideBar;
