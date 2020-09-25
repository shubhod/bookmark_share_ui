import React from "react";
import EditorMenuComponent from "./EditorMenu/EditorMenuComponent";
import EditorInputAreaComponent from "./EditorInputArea/EditorInputAreaComponent";
import "./EditorComponent.scss";
import NotesIndex from "./NotesIndex/NotesIndexComponent";
const EditorComponent = (props) => {
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

export default React.memo(EditorComponent);
