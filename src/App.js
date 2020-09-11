import React from 'react';
import  TextEditor from './screens/Main/NoteBook';
import  SideBar from './components/SideBar/SideBarComponent';
import {Layout} from "antd";
import Notes from './components/Notes/NotesComponent';

function App() {
  return (
    <div>
      <Layout>
        {/* <SideBar
        /> */}
        <Notes/>
        </Layout>
          
    </div>
  );
}

export default App;
