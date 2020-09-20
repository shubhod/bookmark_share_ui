import React from "react";
import "./NotesStyles.scss";
const Notes = (props) => {
  const notes = props.notes;
  return notes.map((note, index) => {
    return (
      <div className="notes" style={props.style}>
        <div className="notes__header" style={props.headerStyle}>{note.header}</div>
        <div className="notes__content"style={props.contentStyle}>{note.content}</div>
        <div className="notes__footer" style={props.footerStyle}>{note.footer}</div>
      </div>
    );
  });
};
export default Notes;
