import React, { useContext } from "react";
import { Menu, Input, Button } from "antd";
import { MenuItemsComponent } from "../MenuItems/MenuItemsComponent";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import "./SideBarStyles.scss";
import { MainNavContext } from "../../screens/MainNav/MainNavContext";
const SideBarContent = () => {
  const { menuProps } = useContext(MainNavContext);
  const MenuItems = MenuItemsComponent(menuProps);
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectable={false}
      className="mainScreenSideBar__Menu"
    >
      <Menu.Item>
        <Input
          size="medium"
          placeholder="search for notes"
          prefix={<SearchOutlined />}
        />
        <br />
      </Menu.Item>
      <Menu.Item style={{ marginBottom: "20px" }}>
        <Button
          block
          type="primary"
          className="btnAddNotes"
          icon={<PlusOutlined className="icnPlusOutlined" />}
          onClick={()=>{menuProps.onClickAddNotes()}}
          size="large"
        >
          add Notes
        </Button>
      </Menu.Item>
      {MenuItems}
    </Menu>
  );
};

export default SideBarContent;
