import React, { useContext } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { EditorContext } from "../../../screens/EditorContainer/EditorScreen";
import { GenerateMenuItems } from "./GenerateMenuItems";
import { EDITOR_MENU_ICONS, FONT_FAMILY } from "./constants";
const { SubMenu } = Menu;

const EditorMenuComponent = (props) => {
  const { fontControl, onExecCmd } = useContext(EditorContext);

  let MenuItems = GenerateMenuItems(
    Object.keys(EDITOR_MENU_ICONS),
    "menu",
    onExecCmd
  );

  let subMenuFontName = GenerateMenuItems(FONT_FAMILY, "fontName", onExecCmd);

  let subMenuFontSize = GenerateMenuItems([...Array(7)], "fontSize", onExecCmd);
  return (
    <Menu
      selectable={false}
      className="EditorLayout__MenuBarHeader__MenuBar EditorLayout__MenuBarHeader"
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
        {subMenuFontName}
      </SubMenu>
      <SubMenu
        title={fontControl.fontSize}
        icon={<CaretDownOutlined className="subMenu_FontIcon" />}
        className="EditorLayout__SubMenuBar"
      >
        {subMenuFontSize}
      </SubMenu>
      {MenuItems}
      <br />
    </Menu>
  );
};

export default EditorMenuComponent;
