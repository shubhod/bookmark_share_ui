import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MainScreen from './screens/Main/MainScreen';
import NotesIndex from './components/NotesIndex/NotesIndexComponent';
//<MainScreen />
ReactDOM.render(
   <NotesIndex/>,
  document.getElementById('root')
);
