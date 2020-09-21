export const changeFontOptionEditorMenu = (
  event,
  fontControl,
  setFontControl
) => {
  let fontArray = event.target.getElementsByTagName("font");
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
export const execContentEditableCmd = (
  cmd,
  value,
  fontControl,
  setFontControl,
  attrId
) => {
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
