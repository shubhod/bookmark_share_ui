import React, { useState, createContext, useEffect } from "react";
import "antd/dist/antd.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { Menu, Space } from "antd";
import "./ScssEditorControl.scss";
import {gsap,Draggable,TweenLite } from "gsap/all";

import {
  GenerateControlMenu,
  GenerateFontFamily,
} from "./GenerateControls/GenerateControls";
import { FONT_FAMILY, CONTROL_NAME_MAPS } from "./constants.js";
import m from "jquery";
import resizable from "jquery-ui";
const { SubMenu } = Menu;
gsap.registerPlugin(TweenLite,Draggable);

export const ViewEditorControl = () => {
  const [text, setText] = useState([]);
  const [imgList,setImgList] =useState([]);
  const [current, setcurrent] = useState(null);
  const [fontControl, setFontControl] = useState({
    fontFamily: "Font",
    fontSize: "fontSize",
  });

  useEffect(() => {
    m("#textArea").focus();
    console.log(resizable);
  }, []);
  useEffect(()=>{
      // let img=$("#"+imgList[imgList.length-1]);
      
      // img.resizable();
  },[imgList.length]);

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
      setImgList(oldArray=>[...oldArray,attrId]);

    } else {
      document.execCommand(cmd,false, value);
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
  console.log(fontName);

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
          {text}
        </div>
      </div>
    </Space>
  );
};
