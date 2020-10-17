export const showHidePasswordField=async (field)=>{
    if (userName) {
        if (await checkUserNameExists(signInSignUp.userName)) {
          setSignInSignUp({
            ...signInSignUp,
            isPassInpHidden: false,
          });
          setTimeout(() => {
            signInSignUp.passwordRef.current.focus();
          }, 100);
        } else {
          setSignInSignUp({ ...signInSignUp, isUserFound: false });
        }
      }
}