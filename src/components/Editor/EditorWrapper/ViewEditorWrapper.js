import React, {useState} from "react";
import {ViewEditorControl} from "../EditorControls/ViewEditorControl";


// var focusTarget=(target)=>{
//   console.log(target)
//   var range = document.createRange();
//   var sel = window.getSelection();
//   range.setStart(target.anchorNode,target.anchorOffset)
//   range.collapse(true);
//   sel.removeAllRanges();
//   sel.addRange(range);

// 

var ViewEditorWrapper = () => {
  //   useEffect(() => {
  //    textArea=document.getElementById("textArea");
  // },[]);
  // const [target,setTarget] = useState(null);
  // var execCmdEditor=(cmd, value)=>{
  //   document.execCommand(cmd, false, value);
  //   // console.log(target);
  //   // textArea.focus();
  // };
  return (
    <ViewEditorControl/>
  );
};
export default ViewEditorWrapper;