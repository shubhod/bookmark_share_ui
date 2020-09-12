import React from "react";
import Notes from "../Notes/NotesComponent";
import { Divider, Space } from "antd";  
import "./NotesIndexStyles.scss";

const NotesIndex = (props) => {
  return (
    <>
    <div className="allNotes">
      <Notes notes={[{header:"all Notes",content:"",footer:"footer"},{header:"all Notes",content:"dasddddddddddddassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdqwwwwwwwwwwwwwwwwwwwdsaaaaa",footer:"footer"}]}/>
      </div>
    </>
  );
};

export default NotesIndex;
