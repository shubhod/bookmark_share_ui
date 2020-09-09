import React, {useRef} from "react";
import { EDITOR_MENU_ICONS } from "./constants";
import "antd/dist/antd.css";
import { Menu } from "antd";
import "./ScssMenuItems.scss";

var countImg = 0;
export const GenerateMenuItems = (
  controlNameList,
  menuType,
  contextEditorCmd
) => {
  const inputRef = useRef(null);
  const fontFamily = (controlName, index) => {
    return (
      <Menu.Item
        key={controlName + index}
        onMouseDown={(event) => {
          event.preventDefault();
          contextEditorCmd("fontName", controlName);
        }}
      >
        {controlName}
      </Menu.Item>
    );
  };

  const fontSize = (controlName, index) => {
    return (
      <Menu.Item
        key={"fontSize" + index}
        onMouseDown={(e) => {
          e.preventDefault();
          contextEditorCmd("fontSize", index);
        }}
      >
        {index}
      </Menu.Item>
    );
  };

  function convertImgtoBase64(event) {
    event.persist();
    if (event.target.files && event.target.files[0]) {
      let fileReader = new FileReader();
      let imgId = "Img" + countImg;
      countImg = countImg + 1;
      fileReader.addEventListener("load", (event) => {
        this.contextEditorCmd(
          "insertHTML",
          `<img id=${imgId} src=${
            event.target.result
          } width="500" height="200">`,
          imgId
        );
      });
      fileReader.readAsDataURL(event.target.files[0]);
    }
  }

  const genericMenuItems = (controlName, index) => {
    let contextEditorCmdObj = { contextEditorCmd: contextEditorCmd };
    if (controlName == "image") {
      return (
        <Menu.Item
          key={index + controlName}
          onClick={() => {
            inputRef.current.click();
          }}
        >
          <i className="far fa-file-image" style={{ fontSize: 20 }} />
          <input
            type="file"
            ref={inputRef}
            onChange={convertImgtoBase64.bind(contextEditorCmdObj)}
          />
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item
          key={controlName + index}
          icon={EDITOR_MENU_ICONS[controlName]}
          onMouseDown={(event) => {
            contextEditorCmd(controlName, null);
          }}
        />
      );
    }
  };
  let menuManager = (callBack) => {
    return controlNameList.map((controlName, index) => {
      return callBack(controlName, index);
    });
  };
  let menuItem = null;
  if (menuType == "menu") {
    menuItem = menuManager(genericMenuItems);
  } else if (menuType == "fontName") {
    menuItem = menuManager(fontFamily);
  } else if (menuType == "fontSize") {
    menuItem = menuManager(fontSize);
  }

  return menuItem;
};
