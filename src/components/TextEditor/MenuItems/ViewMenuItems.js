import React, { useState, createContext, useEffect } from "react";
import "antd/dist/antd.css";
import { CaretDownOutlined } from "@ant-design/icons";
import {Layout,Menu } from "antd";
import "./ScssMenuItems.scss";
import ViewTextArea from "../TextArea/ViewTextArea";
import { GenerateMenuItems } from "./GenerateMenuItems/GenerateMenuItems";
import { FONT_FAMILY, EDITOR_MENU_ICONS } from "./constants.js";
const { SubMenu } = Menu;

export const ViewMenuItems = (props) => {
  const [imgList, setImgList] = useState([]);
  const [fontControl, setFontControl] = useState({
    fontFamily: "Font",
    fontSize: "fontSize",
  });

  var handleContentEditable = (event) => {
    var fontArray = event.target.getElementsByTagName("font");
    let newFontControl = null;
    if (fontArray.length > 0) {
      newFontControl = { ...fontControl };
      newFontControl.fontFamily = fontArray[fontArray.length - 1].face;
      setFontControl(newFontControl);
    } else if (event.target.tagName == "FONT") {
      newFontControl = { ...fontControl };
      newFontControl.fontFamily = event.target.face;
      setFontControl(newFontControl);
    } else {
      newFontControl = { ...fontControl };
      newFontControl.fontFamily = "Font";
    }
  };
  var execCmdEditor = (cmd, value, attrId) => {
    var newFontControl = null;
    if (cmd == "insertHTML") {
      document.execCommand(cmd, true, value);
      setImgList((oldArray) => [...oldArray, attrId]);
    } else {
      document.execCommand(cmd, false, value);
    }

    if (cmd == "fontName") {
      newFontControl = { ...fontControl };
      newFontControl.fontFamily = value;
      setFontControl(newFontControl);
    }
    if (cmd == "fontSize") {
      newFontControl = { ...fontControl };
      newFontControl.fontSize = value;
      setFontControl(newFontControl);
    }
  };

  let controls = GenerateMenuItems(
    Object.keys(EDITOR_MENU_ICONS),
    "menu",
    execCmdEditor
  );

  let fontName = GenerateMenuItems(FONT_FAMILY, "fontName", execCmdEditor);
  let fontSize = GenerateMenuItems([...Array(7)], "fontSize", execCmdEditor);
  return (
    <Layout  className="EditorLayout">
      <Layout.Header className="EditorLayout__MenuBarHeader">
          <Menu
            className="EditorLayout__MenuBarHeader__MenuBar"
            onMouseDown={(event) => {
              event.preventDefault();
            }}
            mode="horizontal"
          >
            <SubMenu
              title={fontControl.fontFamily}
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
            {controls}
            <br />
          </Menu>
      </Layout.Header>
      <Layout.Content className="site-layout" style={{ padding: '0 130px', marginTop:10 }}>
      <ViewTextArea
        handleContentEditable={handleContentEditable}
        fontControl={fontControl}
      />
      </Layout.Content>
      {/* </Space> */}
    </Layout>
  );
};
