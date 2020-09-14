import React from "react";
import { Layout } from "antd";
import MainNavSideBar from "./screens/MainNavSideBar/MainNavSideBar";
import { Editor } from "./screens/EditorContainer/EditorScreen";
function App() {
  return (
    <div className="appContainer">
      <MainNavSideBar />
      <Editor />
    </div>
  );
}

export default App;
