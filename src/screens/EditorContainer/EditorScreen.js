import React, { useState, useRef, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import EditorComponent from "../../components/Editor/EditorComponent";
import { addNote } from "../MainNav/mainNavRedux/MainNavActions";
import { setNotesContent } from "../../helper/setNotesContent";

export const EditorContext = React.createContext(null);

export const Editor = () => {
  const editorDispatch=useDispatch(); 
  const allNotes=useSelector(state => state.mainNavReducer.allNotes);
  const [fontControl, setFontControl] = useState({
    fontName: "Font",
    fontSize: "fontSize",
  });

  const [html, setHtml] = useState(`<div><br/></div>`);

  const contentEditableRef=useRef(null);
  const notesTitle=useRef(null);
  
  useEffect(() => {
    document.execCommand("insertHTML", true, html);
    if(!allNotes.length){
      let note=setNotesContent();
      editorDispatch(addNote(note));
    }

  }, []);

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
          contentEditableRef: contentEditableRef,
          saveTextAreaHtml: saveTextAreaHtml,
          allNotes:allNotes
        
        }}
      >
        <EditorComponent />
      </EditorContext.Provider>
    </>
  );
};
