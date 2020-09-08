import React from 'react';
import  TextEditor from './screens/Main/NoteBook';
import  SideBar from './components/SideBar/SideBarComponent';
import {Layout} from "antd";
function App() {
  return (
    <div>
      <Layout>
        <SideBar
        />
      </Layout>
          
    </div>
  );
}

export default App;
