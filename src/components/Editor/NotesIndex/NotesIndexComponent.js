import React, { useContext } from "react";
import Notes from "./Notes/NotesComponent";
import "./NotesIndexStyles.scss";
import { EditorContext } from "../../../screens/EditorContainer/EditorScreen";
import { useSelector } from "react-redux";
const NotesIndex = (props) => {
  const allNotes = useSelector((state) => {
    return state.mainNavReducer;
  });
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
          <Notes  notes={[...allNotes]} />
        </div>
      </div>
    </>
  );
};

export default NotesIndex;
