import React, { useState, useContext } from "react";
import { Layout, Space, Input } from "antd";
import "./ScssTextEditorInputArea.scss";
import { EditorContext } from "../../../screens/EditorContainer/EditorScreen";
export default (props) => {
  let { onInputEditor, onClickEditor,onInputNotesTitle} = useContext(EditorContext);
  return (
    <div className="editor-input-area">
      <div className="editor-input-area__content">
        <Input
          bordered={false}
          placeholder="Untitled"
          className="editor-input-area__content__input"
          onInput={(event)=>{onInputNotesTitle(event.target.value)}}
        />
        <div
          contentEditable
          className="card"
          id="textArea"
          onInput={(event) => {
            onInputEditor(event);
            event.persist();
          }}
          onClick={(event) => {
            onClickEditor(event);
          }}
        />
      </div>
    </div>
  );
};
