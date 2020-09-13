import React, { useState,useRef,useEffect } from "react";
import { Layout } from "antd";
import EditorInputAreaComponent from "../../components/EditorInputArea/EditorInputAreaComponent";
import { GenerateMenuItems } from "../../components/EditorMenu/GenerateMenuItems";
import {
  FONT_FAMILY,
  EDITOR_MENU_ICONS
} from "../../components/EditorMenu/constants.js";
import TextEditorMenuItems from "../../components/EditorMenu/EditorMenuComponent";
export const Editor = () => {
  const [imgList, setImgList] = useState([]);
  const [fontControl, setFontControl] = useState({
    fontName: "Font",
    fontSize: "fontSize",
  });
  const [html, setHtml] = useState(`<div><br/></div>`);
  const [textAreaRef, setTextAreaRef] = useState(useRef(null));

  useEffect(() => {
    textAreaRef.current.focus();
    document.execCommand("insertHTML",true,html);
  }, []);

  const saveTextAreaHtml = (event) => {
    setHtml(event.target.innerHTML);
  };

  var handleContentEditable = (event) => {
    var fontArray = event.target.getElementsByTagName("font");
    let newFontControl = null;
    if (fontArray.length > 0) {
      newFontControl = { ...fontControl };
      newFontControl.fontName = fontArray[fontArray.length - 1].face;
      setFontControl(newFontControl);
    } else if (event.target.tagName == "FONT") {
      newFontControl = { ...fontControl };
      newFontControl.fontName = event.target.face;
      setFontControl(newFontControl);
    } else {
      newFontControl = { ...fontControl };
      newFontControl.fontName = "Font";
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
      newFontControl.fontName = value;
      setFontControl(newFontControl);
    }
    if (cmd == "fontSize") {
      newFontControl = { ...fontControl };
      newFontControl.fontSize = value;
      setFontControl(newFontControl);
    }
  };

  let genericMenuItems = GenerateMenuItems(
    Object.keys(EDITOR_MENU_ICONS),
    "menu",
    execCmdEditor
  );

  let subMenuFontName = GenerateMenuItems(
    FONT_FAMILY,
    "fontName",
    execCmdEditor
  );
  
  let subMenuFontSize = GenerateMenuItems(
    [...Array(7)],
    "fontSize",
    execCmdEditor
  );
  return (
    <>
      {/* <TextEditorMenuItems
        fontName={subMenuFontName}
        fontSize={subMenuFontSize}
        genericMenuItems={genericMenuItems}
        fontControl={fontControl}
      />
      <EditorInputAreaComponent
        handleContentEditable={handleContentEditable}
        fontControl={fontControl}
        textAreaRef={textAreaRef}
        saveTextAreaHtml={saveTextAreaHtml}
      /> */}
    </>
  );
};
