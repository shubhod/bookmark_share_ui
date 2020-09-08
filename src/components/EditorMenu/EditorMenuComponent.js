import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu;
const EditorMenuComponent = (props)=> {
  let { fontName, fontSize, genericMenuItems, fontControl } = props;
  return (
    <Layout.Header className="EditorLayout__MenuBarHeader">
      <Menu
        className="EditorLayout__MenuBarHeader__MenuBar"
        onMouseDown={(event) => {
          event.preventDefault();
        }}
        mode="horizontal"
      >
        <SubMenu
          title={fontControl.fontName}
          icon={<CaretDownOutlined className="subMenu_FontIcon" />}
          className="EditorLayout__SubMenuBar"
        >
          {fontName}
        </SubMenu>
        <SubMenu
          title={fontControl.fontSize}
          icon={<CaretDownOutlined className="subMenu_FontIcon" />}
          className="EditorLayout__SubMenuBar"
        >
          {fontSize}
        </SubMenu>
        {genericMenuItems}
        <br />
      </Menu>
    </Layout.Header>
  );
};

export default EditorMenuComponent;
