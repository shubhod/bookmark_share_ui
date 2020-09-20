import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditorComponent from "../../components/Editor/EditorComponent";
import { addNote } from "../MainNav/mainNavRedux/MainNavActions";
import { setNotesContent } from "../../helper/setNotesContent";

export const EditorContext = React.createContext(null);

export const Editor = () => {
  const editorDispatch = useDispatch();
  const [allNotesLocalState, setallNotesLocalState] = useState(null);
  const allNotes = useSelector((state) => {
    return state.mainNavReducer.allNotes;
  });
  const [fontControl, setFontControl] = useState({
    fontName: "Font",
    fontSize: "fontSize",
  });
  const [html, setHtml] = useState(`<div><br/></div>`);
  const currentNoteRef = useRef();

  useEffect(() => {
    document.execCommand("insertHTML", true, html);
    if (!allNotes.length) {
      let note = setNotesContent();
      editorDispatch(addNote(note));
    }
  }, []);
  let prev = useRef(null);
  useEffect(() => {
    if (allNotes.length) {
      if (prev.current) {
        console.log(prev.current.align);
      }
      currentNoteRef.current.style.border = "2px solid red";
      prev.current = { ...currentNoteRef };
    }
  }, [allNotes.length]);

  const saveTextAreaHtml = (event) => {
    setHtml(event.target.innerHTML);
  };

  var handleContentEditable = (event) => {
    var fontArray = event.target.getElementsByTagName("font");
    let newFontControl = null;
    if (fontArray.length > 0) {
      newFontControl = { ...fontControl };
      newFontControl.fontName = fontArray[fontArray.length - 1].face;
      setFontControl(newFontControl);
    } else if (event.target.tagName == "FONT") {
      newFontControl = { ...fontControl };
      newFontControl.fontName = event.target.face;
      setFontControl(newFontControl);
    } else {
      newFontControl = { ...fontControl };
      newFontControl.fontName = "Font";
    }
  };

  var onExecCmd = (cmd, value, attrId) => {
    var newFontControl = null;
    if (cmd == "insertHTML") {
      document.execCommand(cmd, true, value);
    } else {
      document.execCommand(cmd, false, value);
    }

    if (cmd == "fontName") {
      newFontControl = { ...fontControl };
      newFontControl.fontName = value;
      setFontControl(newFontControl);
    }
    if (cmd == "fontSize") {
      newFontControl = { ...fontControl };
      newFontControl.fontSize = value;
      setFontControl(newFontControl);
    }
  };

  return (
    <>
      <EditorContext.Provider
        value={{
          onExecCmd: onExecCmd,
          fontControl: fontControl,
          handleContentEditable: handleContentEditable,
          saveTextAreaHtml: saveTextAreaHtml,
          allNotes: allNotes,
          currentNoteRef: currentNoteRef,
        }}
      >
        <EditorComponent />
      </EditorContext.Provider>
    </>
  );
};
