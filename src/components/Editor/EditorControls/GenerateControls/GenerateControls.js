import React,{ useContext,useRef } from "react";
import { CONTROL_NAME_MAPS } from "../constants";
import "antd/dist/antd.css";
import { Menu } from "antd";
import "./ScssGenerateControls.scss";

var countImg=0;
export const GenerateControlMenu = (
  controlNameList,
  menuType,
  contextEditorCmd
) => {
  const inputRef = useRef(null);
  const fontFamily = (controlName,index) => {
    return (
      <Menu.Item
        key={controlName + index}
        onMouseDown={(event) => {
          event.preventDefault();
          contextEditorCmd("fontName",controlName);
        }}
      >
        {controlName}
      </Menu.Item>
    );
  };
  const handleDel = (event) => {
    event.preventDefault();
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
  
  
  function convertImgtoBase64(event){
      event.persist();
      if(event.target.files && event.target.files[0]){
        var fileReader= new FileReader();
        var imgId="Img"+countImg;
        countImg=countImg+1;
        fileReader.addEventListener("load",(event)=>{
          this.contextEditorCmd("insertHTML",`<img id=${imgId} src=${event.target.result} width="500" height="200">`,imgId);
        });
        fileReader.readAsDataURL(event.target.files[0]);
      }
  }
  const generalControlMenu = (controlName,index) => {
    var contextEditorCmdObj={"contextEditorCmd":contextEditorCmd}
    if (controlName == "image") {
      return (
        <Menu.Item
        key={index+controlName}
        onClick={()=>{inputRef.current.click()}}
        >   
          <i 
          className="far fa-file-image"
          style={{fontSize:20}}
          />
          <input type="file" 
          ref={inputRef}
          onChange={convertImgtoBase64.bind(contextEditorCmdObj)}
          />
        </Menu.Item>    
        );
    } else {
      return (
        <Menu.Item
          key={controlName + index}
          icon={CONTROL_NAME_MAPS[controlName]}
          onMouseDown={(event) => {
            contextEditorCmd(controlName, null);
          }}
        />
      );
    }
  };
  var menuTypeManager=(callBack)=>{
      return controlNameList.map((controlName,index)=>{
        return callBack(controlName,index);
      })
  }
  var menuItem=null;
  if (menuType == "menu") {
    menuItem= menuTypeManager(generalControlMenu);
  } else if (menuType == "fontName") {
    menuItem= menuTypeManager(fontFamily);
  } else if (menuType == "fontSize") {
    menuItem= menuTypeManager(fontSize);
  }

  return menuItem
};
