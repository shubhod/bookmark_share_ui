export const makeMethods = (state, setState) => {
  return {
    showHideField({ ...fields }) {
      setState({ ...state, ...fields });
    },
  };
};
