import React, { useContext } from "react";
import Notes from "./Notes/NotesComponent";
import "./NotesIndexStyles.scss";
import { EditorContext } from "../../../screens/EditorContainer/EditorScreen";

const NotesIndex = (props) => {
  const { allNotes } = useContext(EditorContext);
  console.log(allNotes);
  return (
    <>
      <div>
        <Notes
          notes={[
            {
              header: "All Notes",
              content: " ",
              footer: "footer",
              headerStyle:{fontSize:"20px"}
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
