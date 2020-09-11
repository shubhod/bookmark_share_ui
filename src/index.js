import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MainScreen from './screens/Main/MainScreen';
import TabsCard from './components/Notes/NotesComponent';
//<MainScreen />
ReactDOM.render(
   <TabsCard/>,
  document.getElementById('root')
);
