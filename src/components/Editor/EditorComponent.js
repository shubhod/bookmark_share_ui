import React, { useContext } from "react";
import EditorMenuComponent from "./EditorMenu/EditorMenuComponent";
import EditorInputAreaComponent from "./EditorInputArea/EditorInputAreaComponent";
import "./EditorComponent.scss";
import NotesIndex from "../NotesIndex/NotesIndexComponent";
const EditorComponent = () => {
  return (
    <>
      <NotesIndex />
      <div className="editorWrapper">
      <EditorMenuComponent />
      <EditorInputAreaComponent />
      </div>
    </>
  );
};

export default EditorComponent;
