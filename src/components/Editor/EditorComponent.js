import React from "react";
import EditorMenuComponent from "./EditorMenu/EditorMenuComponent";
import EditorInputAreaComponent from "./EditorInputArea/EditorInputAreaComponent";
import "./EditorComponent.scss";
import NotesIndex from "./NotesIndex/NotesIndexComponent";
const EditorComponent = (props) => {
  return (
    <div className="editor">
      <NotesIndex />
      <div className="editor__input-area">
        <EditorMenuComponent />
        <EditorInputAreaComponent />
      </div>
    </div>
  );
};

export default React.memo(EditorComponent,()=>{ return false});
