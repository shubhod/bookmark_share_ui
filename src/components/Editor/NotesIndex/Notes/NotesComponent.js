import React, { useContext } from "react";
import "./NotesStyles.scss";
import { useEditorNotesContext } from "../../../../screens/EditorContainer/Context/EditorContext";
const Notes = (props) => {
  const notes = props.notes;
  const {currentNoteRef,onClickNotes} =useEditorNotesContext(); 
  const newNotes = [];
  let newArrayIndex=0;
  let classString="notes";
  if(props.className) classString=`${classString} ${props.className}`;
  for (let index=notes.length - 1;index >=0; index--) {
    let note = notes[index];    
    newNotes[newArrayIndex] = (
      <div
        key={note.header + index}
        ref={currentNoteRef}
        className={classString} 
        onClick={(event)=>{onClickNotes(event,note.header,index);}}
      >
        <div className="notes__header" style={props.headerStyle}>
          {note.header}
        </div>
        <div className="notes__content" style={props.contentStyle}>
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
export default React.memo(Notes,(prev,next)=>{
  if(prev.notes.length){
    console.log(prev.notes.length,next.notes.length);
  }
  return prev.notes.length===next.notes.length;
});


