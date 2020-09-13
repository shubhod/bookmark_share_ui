import React, { useState, useEffect, useRef } from "react";
import { Layout } from "antd";
import "./ScssTextEditorInputArea.scss";

export default (props)=> {
  let { saveTextAreaHtml, textAreaRef, handleContentEditable } = props;
  return (
    <Layout.Content
      style={{ padding: "0 ", marginTop: 10, width: "100%" }}
    >
      <div
        contentEditable
        className="card"
        id="textArea"
        ref={textAreaRef}
        onInput={(event) => {
          saveTextAreaHtml(event);
          event.persist();
        }}
        onClick={(event) => {
          handleContentEditable(event);
        }}
      />
    </Layout.Content>
  );
};
