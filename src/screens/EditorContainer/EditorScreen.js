import React, { useState, useRef, useEffect} from "react";
import {useSelector} from 'react-redux';
import EditorComponent from "../../components/Editor/EditorComponent";

export const EditorContext = React.createContext(null);

export const Editor = () => {
  const allNotes=useSelector(state => state.mainNavReducer.allNotes);
  const [fontControl, setFontControl] = useState({
    fontName: "Font",
    fontSize: "fontSize",
  });

  const [html, setHtml] = useState(`<div><br/></div>`);

  const [textAreaRef, setTextAreaRef] = useState(useRef(null));

  useEffect(() => {
    textAreaRef.current.focus();
    document.execCommand("insertHTML", true, html);
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
          textAreaRef: textAreaRef,
          saveTextAreaHtml: saveTextAreaHtml,
          allNotes:allNotes
        }}
      >
        <EditorComponent />
      </EditorContext.Provider>
    </>
  );
};
