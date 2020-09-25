import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditorComponent from "../../components/Editor/EditorComponent";
import {
  addNoteAction,
  editNotesAction,
} from "../MainNav/mainNavRedux/MainNavActions";
import {
  remvBorderFromNotes,
  addBorderToNotes,
  toggleFocusOfNotes,
} from "./Methods/notesIndexMethods";
import {
  changeFontOptionEditorMenu,
  execContentEditableCmd,
} from "./Methods/editorAreaMethods";
import EditorContext from "./Context/EditorContext";

// export const EditorContext = React.createContext();
// export const EditoMenuContext=React.createContext();

const Editor = () => {
  // dispatcher instance
  const editorDispatch = useDispatch();

  //allNotes redux global state
  const allNotes = useSelector((state) => {
    return state.mainNavReducer;
  });

  //local states of editor screen
  const [fontControl, setFontControl] = useState({
    fontName: "Font",
    fontSize: "fontSize",
  });
  const [html, setHtml] = useState(`<div><br/></div>`);
  const [allNotesCurrentIndex, setAllNotesCurrentIndex] = useState(0);

  // refs
  const currentNoteRef = useRef();
  let previousNotesRef = useRef();
  const contentEditableRef = useRef();

  //side effects
  useEffect(() => {
    contentEditableRef.current.focus();
    document.execCommand("insertHTML", true, html);
  }, []);

  useEffect(() => {
    console.log("previousNotesRef", previousNotesRef);
    console.log("currentNoteRef", currentNoteRef);
    if (previousNotesRef.current) {
      remvBorderFromNotes(previousNotesRef);
    }
    addBorderToNotes(currentNoteRef);
    previousNotesRef.current = { ...currentNoteRef }.current;
    setAllNotesCurrentIndex(allNotes.length - 1);
  }, [allNotes.length]);


  const [state, setstate] = useState(0);
  //event handlers and logic
  const onClickNotes = (event, title, index) => {
    toggleFocusOfNotes(event, title, previousNotesRef, currentNoteRef);
    setstate(4);
    // setAllNotesCurrentIndex(index);
    // contentEditableRef.current.focus();
    // document.execCommand("insertHTML", true, allNotes[index].content);
  };

  var onClickEditor = (event) => {
    changeFontOptionEditorMenu(event, fontControl, setFontControl);
  };

  var onClickEditorMenuItem = (cmd, value, attrId) => {
    execContentEditableCmd(cmd, value, fontControl, setFontControl, attrId);
  };

  const onInputNotesTitle = (value) => {
    if (!value.length) {
      value = "untitled";
    }
    let notes = { ...allNotes[allNotesCurrentIndex], header: value };
    editorDispatch(editNotesAction(notes, allNotesCurrentIndex));
  };
  const onInputEditor = (event) => {
    let notes = {
      ...allNotes[allNotesCurrentIndex],
      content: event.target.value,
    };
    console.log(notes);
    editorDispatch(editNotesAction(notes, allNotesCurrentIndex));
  };

  let NotesContextValues = { currentNoteRef, onClickNotes };
  let MenuContextValues = { fontControl, onClickEditorMenuItem };
  let InputAreaContextValues = {
    onInputEditor,
    onClickEditor,
    onInputNotesTitle,
    contentEditableRef,
    allNotesCurrentIndex,
    state
  
  };

  //view
  return (
    <>
      <EditorContext
        NotesContextValues={NotesContextValues}
        MenuContextValues={MenuContextValues}
        InputAreaContextValues={InputAreaContextValues}
      >
        <EditorComponent />
      </EditorContext>
    </>
  );
};
export default Editor;
