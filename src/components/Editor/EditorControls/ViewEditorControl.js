import React, { useState, createContext, useEffect } from "react";
import "antd/dist/antd.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { Menu, Space } from "antd";
import "./ScssEditorControl.scss";
import {
  GenerateControlMenu,
  GenerateFontFamily,
} from "./GenerateControls/GenerateControls";
import { FONT_FAMILY, CONTROL_NAME_MAPS } from "./constants.js";
import $ from "jquery";
const { SubMenu } = Menu;

export const ViewEditorControl = () => {
  const [textArea, setTextArea] = useState(null);
  const [target, setTarget] = useState(null);
  const [current, setcurrent] = useState(null);
  const [fontControl, setFontControl] = useState({
    fontFamily: "Font",
    fontSize: "fontSize",
  });

  useEffect(() => {
    $("#textArea").focus();
  }, []);

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

  var execCmdEditor = (cmd, value,attrId) => {
    var newFontControl = null;
    if (cmd == "insertHTML") {
      document.execCommand(cmd, true, value);      
    } 
    else {
      document.execCommand(cmd, false, value);
    }

    if (cmd == "fontName") {
      console.log(window.getSelection());
      newFontControl = { ...fontControl };
      newFontControl.fontFamily = value;
      console.log(newFontControl);
      setFontControl(newFontControl);
    }
    if (cmd == "fontSize") {
      newFontControl = { ...fontControl };
      newFontControl.fontSize = value;
      setFontControl(newFontControl);
    }
  };

  let controls = GenerateControlMenu(
    Object.keys(CONTROL_NAME_MAPS),
    "menu",
    execCmdEditor
  );

  let fontName = GenerateControlMenu(FONT_FAMILY, "fontName", execCmdEditor);
  let fontSize = GenerateControlMenu([...Array(7)], "fontSize", execCmdEditor);

  return (
    <Space direction="vertical" className="Editor-Text-Container">
      <Menu
        className="EditorControlBox"
        onMouseDown={(event) => {
          event.preventDefault();
        }}
        onClick={(e) => {
          setcurrent(e.key);
        }}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <SubMenu
          title={fontControl.fontFamily}
          icon={<CaretDownOutlined className="subMenu_FontIcon" />}
        >
          {fontName}
        </SubMenu>
        <SubMenu
          title={fontControl.fontSize}
          icon={<CaretDownOutlined className="subMenu_FontIcon" />}
        >
          {fontSize}
        </SubMenu>
        {controls}
        <br />
      </Menu>

      {/*text area from here*/}
      <div
        contentEditable
        className="card"
        id="textArea"
        onClick={handleContentEditable}
      >
        <div id="editArea">
          <font contentEditable face={fontControl.fontFamily} />
        </div>
      </div>
    </Space>
  );
};
