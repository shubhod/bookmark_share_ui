import React, { useState, useEffect, useRef } from "react";
import LoginSignUp from "../../components/LoginSignUp/LoginSignUpComponent";
import LoginSignUpContext from "./SignInSignUpContext";

const SignInSiginUpScreen = () => {
  const formSignUpFooter = {
    explanation: "Already have an account?",
    link: "Sign in",
  };
  const formSignInFooter = {
    explanation: `Don't have an account?`,
    link: `Create account`,
  };
  const [signInSignUp, setSignInSignUp] = useState({
    isSignIn: true,
    userName: null,
    password: null,
    isUserNameEmpty: true,
    isPassInpHidden: true,
    formFooter: formSignInFooter,
    userNameRef: useRef(),
    passwordRef: useRef(),
  });
  useEffect(() => {
    signInSignUp.userNameRef.current.focus();
  });

  const toggleSignInSignUp = () => {
    if (signInSignUp.isSignIn) {
      setSignInSignUp({
        ...signInSignUp,
        isSignIn: false,
        isPassInpHidden:true,
        formFooter: formSignUpFooter,
      });
    } else {
      setSignInSignUp({
        ...signInSignUp,
        isSignIn: true,
        formFooter: formSignInFooter,
      });
    }
  };
  const onClickLogin = () => {
    if (signInSignUp.isSignIn) {
      if (signInSignUp.userName) {
        setSignInSignUp({ ...signInSignUp, isPassInpHidden: false });
        setTimeout(() => {
          signInSignUp.passwordRef.current.focus();
        }, 100);
      }
    }
  };
  const onInpUsrName = (event) => {
    setSignInSignUp({ ...signInSignUp, userName: "eaeea" });
    if (!event.target.value.length) {
      setSignInSignUp({ ...signInSignUp, isPassInpHidden: true });
    }
  };

  return (
    <LoginSignUpContext
      isSignIn={signInSignUp.isSignIn}
      onClickLogin={onClickLogin}
      isPassInpHidden={signInSignUp.isPassInpHidden}
      isUserNameEmpty={signInSignUp.isUserNameEmpty}
      onInpUsrName={onInpUsrName}
      userNameRef={signInSignUp.userNameRef}
      passwordRef={signInSignUp.passwordRef}
    >
      <LoginSignUp
        toggleSignInSignUp={toggleSignInSignUp}
        signInSignUp={signInSignUp}
      />
    </LoginSignUpContext>
  );
};

export default SignInSiginUpScreen;
