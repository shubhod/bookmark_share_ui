export const lazyFocus = (field,timeout) => {
  setTimeout(() => {
    field.current.focus();
  },timeout);
};
