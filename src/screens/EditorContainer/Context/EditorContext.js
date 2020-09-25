import React, { createContext } from "react";
import { useContextFactory } from "../../../helper/useContextFactory";
const EditorNotesContext = createContext();
const EditorMenuContext = createContext();
const EditorInputAreaContext = createContext();

export const useEditorNotesContext = useContextFactory(
  "EditorNotesContext",
  EditorNotesContext
);
export const useEditorMenuContext = useContextFactory(
  "EditorMenuContext",
  EditorMenuContext
);
export const useEditorInputAreaContext = useContextFactory(
  "EditorInputAreaContext",
  EditorInputAreaContext
);

const EditorContext = (props) => {
  let { NotesContextValues, MenuContextValues, InputAreaContextValues } = props;
  console.log(props);
  return (
    <EditorMenuContext.Provider value={MenuContextValues}>
    <EditorNotesContext.Provider value={NotesContextValues}>
        <EditorInputAreaContext.Provider value={InputAreaContextValues}>
          {props.children}
        </EditorInputAreaContext.Provider>
    </EditorNotesContext.Provider>
    </EditorMenuContext.Provider>
  );
};

export default EditorContext;
