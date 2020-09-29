import React, { useState, useEffect } from "react";
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
    formFooter: formSignInFooter,
  });

  const toggleSignInSignUp = () => {
    console.log("clicked");
    if (signInSignUp.isSignIn) {
      setSignInSignUp({
        ...signInSignUp,
        isSignIn: false,
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
  useEffect(() => {
    console.log(signInSignUp);
  });

  return (
    <LoginSignUpContext isSignIn={signInSignUp.isSignIn}>
      <LoginSignUp
        toggleSignInSignUp={toggleSignInSignUp}
        signInSignUp={signInSignUp}
      />
    </LoginSignUpContext>
  );
};

export default SignInSiginUpScreen;
