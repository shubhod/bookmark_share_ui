import { ADD_NOTES, EDIT_NOTES } from "./MainNavActionTypes";
import { setNotesContent } from "../../../helper/setNotesContent";
// const initialState={
//   allNotes:[]
// };
const note=setNotesContent();
const allNotes=[note];
const addNotes=(state,action)=>{
  return [...state,action.note];
}
const editNotes=(state,action)=>{
  let {index,note}=action.payload;
  let newState=Object.assign([...state],{[index]:note});
  return newState;
  }

const mainNavReducer=(state=allNotes,action)=>{
  switch (action.type) {
    case ADD_NOTES:
         return addNotes(state,action);
    case EDIT_NOTES:
         return editNotes(state,action);
    default:
      return allNotes
      }
}
export default mainNavReducer;
