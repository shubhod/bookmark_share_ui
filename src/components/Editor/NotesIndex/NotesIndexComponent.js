import React, { useContext } from "react";
import Notes from "./Notes/NotesComponent";
import "./NotesIndexStyles.scss";
import { EditorContext } from "../../../screens/EditorContainer/EditorScreen";
const NotesIndex = (props) => {
  const { allNotes } = useContext(EditorContext);
  return (
    <>
      <div>
        <Notes
          headerStyle={{fontSize:"20px"}}
          notes={[
            {
              header: "All Notes",
              content: " ",
              footer: "footer"
            }
          ]}
        />
        <div className="allNotes">
          <Notes notes={[...allNotes]} />
        </div>
      </div>
    </>
  );
};

export default NotesIndex;
