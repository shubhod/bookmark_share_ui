import React, { useContext, useEffect } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import {  Menu } from "antd";
import { GenerateMenuItems } from "./GenerateMenuItems";
import { EDITOR_MENU_ICONS, FONT_FAMILY } from "./constants";
import { useEditorMenuContext } from "../../../screens/EditorContainer/Context/EditorContext";
const { SubMenu } = Menu;

const EditorMenuComponent = (props) => {
  const { fontControl } = useEditorMenuContext();

  let MenuItems = GenerateMenuItems(Object.keys(EDITOR_MENU_ICONS), "menu");

  let subMenuFontName = GenerateMenuItems(FONT_FAMILY, "fontName");

  let subMenuFontSize = GenerateMenuItems([...Array(7)], "fontSize");
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

export default React.memo(EditorMenuComponent);
