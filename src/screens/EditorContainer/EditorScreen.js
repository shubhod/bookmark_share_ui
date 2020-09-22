import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditorComponent from "../../components/Editor/EditorComponent";
import {
  addNoteAction,
  editNotesAction,
} from "../MainNav/mainNavRedux/MainNavActions";
import { setNotesContent } from "../../helper/setNotesContent";
import {
  remvBorderFromNotes,
  addBorderToNotes,
  toggleFocusOfNotes,
} from "./Methods/notesIndexMethods";
import {
  changeFontOptionEditorMenu,
  execContentEditableCmd,
} from "./Methods/editorAreaMethods";

export const EditorContext = React.createContext(null);

export const Editor = () => {
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

  //event handlers and logic
  const onClickNotes = (event, title, index) => {
    toggleFocusOfNotes(event, title, previousNotesRef, currentNoteRef);
    setAllNotesCurrentIndex(index);
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
    let notes = {...allNotes[allNotesCurrentIndex],header: value };
    editorDispatch(editNotesAction(notes, allNotesCurrentIndex));
  };
  const onInputEditor = (event) => {
    let notes = {...allNotes[allNotesCurrentIndex],content:event.target.value};
    console.log(notes);
    editorDispatch(editNotesAction(notes, allNotesCurrentIndex));
  };

  //view
  return (
    <>
      <EditorContext.Provider
        value={{
          onClickEditorMenuItem,
          fontControl,
          onInputEditor,
          onInputNotesTitle,
          onClickEditor,
          allNotes,
          currentNoteRef,
          onClickNotes,
          contentEditableRef,
          allNotesCurrentIndex,
        }}
      >
        <EditorComponent />
      </EditorContext.Provider>
    </>
  );
};
