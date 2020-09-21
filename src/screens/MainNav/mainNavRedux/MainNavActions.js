import { ADD_NOTES, EDIT_NOTES } from "./MainNavActionTypes";
export const addNoteAction = (note) => {
  return {
    type: ADD_NOTES,
    note: note,
  };
};
export const editNotesAction=(note,index)=>{
  return{
    type:EDIT_NOTES,
    payload:{note,index}
  }
}
