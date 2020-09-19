import { ADD_NOTES } from "./MainNavActionTypes";
const initialState={
  allNotes:[]
};
const addNotes=(state,action)=>{
  return {...state,allNotes:state.allNotes.concat(action.note)};
}

const mainNavReducer=(state=initialState,action)=>{
  switch (action.type) {
    case ADD_NOTES:
         return addNotes(state,action);
    default:
      return initialState
      }
}
export default mainNavReducer;
