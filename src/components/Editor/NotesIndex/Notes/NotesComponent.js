import React from "react";
import "./NotesStyles.scss";
const Notes = (props) => {
  const notes = props.notes;
  return notes.map((note, index) => {
    return (
      <div className="notes" style={note.style}>
        <div className="notes__header" style={note.headerStyle}>{note.header}</div>
        <div className="notes__content"style={note.contentStyle}>{note.content}</div>
        <div className="notes__footer" style={note.footerStyle}>{note.footer}</div>
      </div>
    );
  });
};
export default Notes;
