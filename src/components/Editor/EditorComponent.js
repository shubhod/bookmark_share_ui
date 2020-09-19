import React from "react";
import EditorMenuComponent from "./EditorMenu/EditorMenuComponent";
import EditorInputAreaComponent from "./EditorInputArea/EditorInputAreaComponent";
import "./EditorComponent.scss";
import NotesIndex from "./NotesIndex/NotesIndexComponent";
import Notes from "./NotesIndex/Notes/NotesComponent";
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
