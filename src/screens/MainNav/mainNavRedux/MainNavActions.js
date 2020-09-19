import { ADD_NOTES } from "./MainNavActionTypes";
export const addNote = (note) => {
  return {
    type: ADD_NOTES,
    note: note,
  };
};
