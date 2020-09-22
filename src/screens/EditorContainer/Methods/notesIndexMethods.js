export const addBorderToNotes = (element) => {
  element.current.style.border = "2px solid red";
  element.current.style.backgroundColor="white"; 
};
export const remvBorderFromNotes = (element) => {
  element.current.style.border = "None";
  element.current.style.backgroundColor="#F0F0F0"; 

};
export const toggleFocusOfNotes = (
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
    if (currentElement.className == "notes") {
      addBorderToNotes({ current: currentElement });
      previousNotesRef.current = currentElement;
    } else {
      addBorderToNotes({ current: currentElementParent });
      previousNotesRef.current = currentElementParent;
    }
  }
};
