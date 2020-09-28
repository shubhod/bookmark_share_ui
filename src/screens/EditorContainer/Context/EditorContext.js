import React, { createContext } from "react";
import { useContextFactory } from "../../../helper/useContextFactory";
const EditorNotesContext = createContext(null,(prev,next)=> {
  return prev.allNotesCurrentIndex==next.allNotesCurrentIndex?0:1
});
const EditorMenuContext=createContext(null,(prev,next)=>{
  return prev.fontControl!==next.fontControl?1:0;
});
const EditorInputAreaContext=createContext(null,(prev,next)=>{
  return 0;
});

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
