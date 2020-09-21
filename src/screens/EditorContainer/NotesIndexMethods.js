export const addBorderToNotes = (element) => {
  element.current.style.border = "2px solid red";
};
export const remvBorderFromNotes = (element) => {
  element.current.style.border = "None";
};
export const ToggleFocusOfNotes = (
  event,
  title,
  previousNotesRef,
  currentNoteRef
) => {
const currentElement = event.target;
  const currentElementParent = event.target.parentNode;
  if (title != "All Notes") {
    remvBorderFromNotes(previousNotesRef);
    remvBorderFromNotes(currentNoteRef);
    // currentNoteRef.current.style.border = "None";
    // previousNotesRef.current.style.border = "None";
    if (currentElement.className == "notes") {
      addBorderToNotes(currentElement);
      //   currentElement.style.border = "2px solid red";
      previousNotesRef.current = currentElement;
    } else {
      addBorderToNotes(currentElementParent);
      //   currentElementParent.style.border = "2px solid red";
      previousNotesRef.current = currentElementParent;
    }
  }
};
