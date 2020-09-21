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
    return state.mainNavReducer.allNotes;
  });

  //local states of editor screen
  const [fontControl, setFontControl] = useState({
    fontName: "Font",
    fontSize: "fontSize",
  });
  const [html, setHtml] = useState(`<div><br/></div>`);
  const [allNotesCurrentIndex, setAllNotesCurrentIndex] = useState(
    allNotes.length
  );

  // refs
  const currentNoteRef = useRef();
  let previousNotesRef = useRef();
  const contentEditable = useRef();

  //side effects
  useEffect(() => {
    document.execCommand("insertHTML", true, html);
  }, []);

  useEffect(() => {
    if (allNotes.length) {
      if (previousNotesRef.current) {
        remvBorderFromNotes(previousNotesRef);
      }
      addBorderToNotes(currentNoteRef);
      previousNotesRef.current = { ...currentNoteRef }.current;
      setAllNotesCurrentIndex(allNotes.length - 1);
    } 
    else {
      let note = setNotesContent({ header: "untitled" });
      editorDispatch(addNoteAction(note));
    }
  }, [currentNoteRef.current]);

  //event handlers and logic
  const onClickNotes = (event, title, index) => {
    toggleFocusOfNotes(event, title, previousNotesRef, currentNoteRef);
  };

  const onInputEditor = (event) => {
    setHtml(event.target.innerHTML);
  };
  const onInputNotesTitle = (value) => {
    let notes = setNotesContent({ header: value });
    console.log(allNotesCurrentIndex);  

    editorDispatch(editNotesAction(notes, allNotesCurrentIndex));
  };

  var onClickEditor = (event) => {
    changeFontOptionEditorMenu(event, fontControl, setFontControl);
  };

  var onClickEditorMenuItem = (cmd, value, attrId) => {
    execContentEditableCmd(cmd, value, fontControl, setFontControl, attrId);
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
        }}
      >
        <EditorComponent />
      </EditorContext.Provider>
    </>
  );
};
