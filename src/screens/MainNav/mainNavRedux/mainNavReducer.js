import { ADD_NOTES, EDIT_NOTES } from "./MainNavActionTypes";
const initialState={
  allNotes:[]
};
const addNotes=(state,action)=>{
  return {...state,allNotes:state.allNotes.concat(action.note)};
}
const editNotes=(state,action)=>{
  const  newState={...state};
  let  {index,note}=action.payload;
  index=(newState["allNotes"].length-1)-index;
  newState["allNotes"][index]=note;
  return newState;
}

const mainNavReducer=(state=initialState,action)=>{
  switch (action.type) {
    case ADD_NOTES:
         return addNotes(state,action);
    case EDIT_NOTES:
         return editNotes(state,action);
    default:
      return initialState
      }
}
export default mainNavReducer;
