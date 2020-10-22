import React from "react";
import MainNav from "./screens/MainNav/MainNavScreen";
import Editor from "./screens/EditorContainer/EditorScreen";
import "./App.css";
import SignInSiginUpScreen from "./screens/SignInSignUp/SignInSignUpScreen";
const App = () => {
  return (
    <div className="appContainer">
      <MainNav/>
      <Editor/>
    </div>
  );
};

export default App;
