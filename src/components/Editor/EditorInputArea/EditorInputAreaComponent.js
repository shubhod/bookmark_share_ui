import React, { useState, useContext, useEffect } from "react";
import { Layout, Space, Input } from "antd";
import "./ScssTextEditorInputArea.scss";
import { EditorContext } from "../../../screens/EditorContainer/EditorScreen";
import { useSelector } from "react-redux";
export default (props) => {
  let {
    onInputEditor,
    onClickEditor,
    onInputNotesTitle,
    contentEditableRef,
    allNotesCurrentIndex,
  } = useContext(EditorContext);

  const allNotes = useSelector((state) => {
    return state.mainNavReducer;
  });

  return (
    <div className="editor-input-area">
      <div className="editor-input-area__content">
        <Input
          spellcheck="false"
          bordered={false}
          value={allNotes[allNotesCurrentIndex].header=="untitled" ?null:allNotes[allNotesCurrentIndex].header}
          placeholder="Title"
          className="editor-input-area__content__input"
          onInput={(event) => {
            onInputNotesTitle(event.target.value);
            event.persist();
          }}
        />
        <div
          contentEditable
          spellcheck="false"
          className="card"
          id="textArea"
          ref={contentEditableRef}
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
