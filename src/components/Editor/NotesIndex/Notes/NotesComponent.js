import React, { useContext } from "react";
import "./NotesStyles.scss";
import { EditorContext } from "../../../../screens/EditorContainer/EditorScreen";
const Notes = (props) => {
  const notes = props.notes;
  console.log(notes);
  const { currentNoteRef} = useContext(EditorContext);
  const newNotes = [];
  let newArrayIndex=0;
  for (let index=notes.length - 1;index >=0; index--) {
    let note = notes[index];
    newNotes[newArrayIndex] = (
      <div
        key={note.header + index}
        ref={currentNoteRef}
        className="notes"
        style={props.style}
      >
        <div className="notes__header" style={props.headerStyle}>
          {note.header}
        </div>
        <div className="notes__content" style={props.contentStyle}>
          {note.content}
        </div>
        <div className="notes__footer" style={props.footerStyle}>
          {note.footer}
        </div>
      </div>
    );
    newArrayIndex++;
  }
  return newNotes;
};
export default Notes;


