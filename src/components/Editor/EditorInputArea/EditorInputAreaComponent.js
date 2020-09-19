import React, { useState, useContext } from "react";
import { Layout, Space, Input } from "antd";
import "./ScssTextEditorInputArea.scss";
import { EditorContext } from "../../../screens/EditorContainer/EditorScreen";
export default (props) => {
  let { saveTextAreaHtml, textAreaRef, handleContentEditable } = useContext(
    EditorContext
  );
  return (
    <div className="editor-input-area">
      <div className="editor-input-area__content">
      <Input bordered={false} placeholder="Untitled" className="editor-input-area__content__input"></Input>
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
    </div>
  );
};
