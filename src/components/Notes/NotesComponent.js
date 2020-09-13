import React from "react";
import "./NotesStyles.scss";
const Notes = (props) => {
  const notes = props.notes;
  return notes.map((note, index) => {
    return (
      <div  className="notes">
        <div className="notes__header">fsdfsfsfsf</div>
        <div className="notes__content">dasddddddddddddasssssssssssssssssssssssssssssssss
        sssssssssssssssssssssssssssssssssssssssssssssssssdqwwwwwwwwwwwwwwwwwwwdsaaaaa
        sssssssssssssssssssssssssssssssssssssssssssssssssdqwwwwwwwwwwwwwwwwwwwdsaaaaa
        sssssssssssssssssssssssssssssssssssssssssssssssssdqwwwwwwwwwwwwwwwwwwwdsaaaaa
        sssssssssssssssssssssssssssssssssssssssssssssssssdqwwwwwwwwwwwwwwwwwwwdsaaaaadeep
        sssssssssssssssssssssssssssssssssssssssssssssssssdqwwwwwwwwwwwwwwwwwwwdsaaaaadeep
        w</div>
        <div className="notes__footer">fdsfsdfsdf</div>
      </div>
    );
  });
};
export default Notes;
