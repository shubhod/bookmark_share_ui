import React,{ useContext,useRef } from "react";
import { CONTROL_NAME_MAPS } from "../constants";
import Aux from '../../../../hoc/Aux';
import "antd/dist/antd.css";
import { Menu } from "antd";
import "./ScssGenerateControls.scss";
const fontFamily = (controlName, index, contextEditorCmd) => {
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

const fontSize = (controlName, index, contextEditorCmd) => {
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
      var lastModified=event.target.files[0].lastModified;
      fileReader.addEventListener("load",(event)=>{
        this.contextEditorCmd("insertHTML",`<img id=${lastModified} src=${event.target.result} width="500" height="200">`,lastModified);
      });
      fileReader.readAsDataURL(event.target.files[0]);

    }
}
const generalControlMenu = (controlName,index,contextEditorCmd,inputRef) => {
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

export const GenerateControlMenu = (
  controlNameList,
  menuType,
  contextEditorCmd
) => {
  const inputRef = useRef(null);
  return controlNameList.map((controlName, index) => {
    if (menuType == "menu") {
      return generalControlMenu(controlName, index, contextEditorCmd,inputRef);
    } else if (menuType == "fontName") {
      return fontFamily(controlName, index, contextEditorCmd);
    } else if (menuType == "fontSize") {
      return fontSize(controlName, index, contextEditorCmd);
    }
  });
};
