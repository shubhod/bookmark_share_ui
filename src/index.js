import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import MainScreen from './screens/Main/MainScreen';
import NotesIndex from './components/NotesIndex/NotesIndexComponent';
import { Editor } from './screens/TextEditor/Editor';
ReactDOM.render(
  <MainScreen />,
  document.getElementById('root')
);
