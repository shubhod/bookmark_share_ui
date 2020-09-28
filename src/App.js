import React from "react";
import MainNav from "./screens/MainNav/MainNavScreen";
import Editor from "./screens/EditorContainer/EditorScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import "./App.css"
const App = () => {
  return (
    <div className="appContainer">
      {/* <MainNav />
      <Editor /> */}
      <LoginScreen />
    </div>
  );
};

export default App;
