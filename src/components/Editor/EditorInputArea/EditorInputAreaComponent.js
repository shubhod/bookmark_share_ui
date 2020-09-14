import React, { useState,useContext } from "react";
import { Layout, Space } from "antd";
import "./ScssTextEditorInputArea.scss";
import { EditorContext } from "../../../screens/EditorContainer/EditorScreen";
export default (props)=> {
  let { saveTextAreaHtml, textAreaRef, handleContentEditable } =useContext(EditorContext);
  console.log(handleContentEditable);
  return (
    <div className="inputArea">
      <div
        contentEditable
        className="card"
        id="textArea"
        ref={textAreaRef}
        onInput={(event) => {
          saveTextAreaHtml(event);
          event.persist();
        }}
        onClick={(event) => {
          handleContentEditable(event);
        }}
      />
      </div>
  );
};
