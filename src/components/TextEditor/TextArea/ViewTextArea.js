import React, { useState, useEffect,useRef} from "react";
import "./ScssTextArea.scss";
function ViewTextArea(props) {
  const textArea=useRef(null);
  const [html,setHtml]=useState(`<div><br/></div>`);
  useEffect(()=>{
    textArea.current.focus();
    document.execCommand("insertHTML",true,props.html);
  },[]);
  const saveHtmlData=(event)=>{
    setHtml(event.target.innerHTML);
    event.persist();
  } 
  return (
    <div
      contentEditable
      className="card"
      id="textArea"
      ref={textArea}
      onInput={saveHtmlData}
      onClick={(event)=>{props.handleContentEditable(event)}}
    >
    </div>
  );
}
export default ViewTextArea;
