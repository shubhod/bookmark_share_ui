import React, { useState, useEffect, useRef } from "react";
import LoginSignUp from "../../components/LoginSignUp/LoginSignUpComponent";
import LoginSignUpContext from "./SignInSignUpContext";
import { checkUserNameExists } from "./apis";
/*ignore jslint start*/

import { useInitialState } from "../../helper/useInitialState";
import Login from "../../components/LoginSignUp/Login/LoginComponent";
import SignUp from "../../components/LoginSignUp/SignUp/SignUpComponent";
import BasicForm from "../../components/BasicForm/BasicFormComponent";
import BasicFormBtn from "../../components/BasicForm/BasicFormBtnComponent";

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
    isUserFound: true,
    loading: false,
  });

  useEffect(() => {
    // signInSignUp.userNameRef.current.focus();
  });
  const getInitialState = useInitialState(signInSignUp);

  const toggleSignInSignUp = () => {
    if (signInSignUp.isSignIn) {
      setSignInSignUp({
        ...signInSignUp,
        ...getInitialState(),
        isSignIn: false,
        isPassInpHidden: true,
        formFooter: formSignUpFooter,
      });
    } else {
      setSignInSignUp({
        ...signInSignUp,
        ...getInitialState(),
        isSignIn: true,
        formFooter: formSignInFooter,
      });
    }
  };

  const onClickContinue = async () => {
    if (signInSignUp.isSignIn) {
      if (signInSignUp.userName) {
        setSignInSignUp({ ...signInSignUp, loading: true });
        if (await checkUserNameExists(signInSignUp.userName)) {
          setSignInSignUp({
            ...signInSignUp,
            loading: false,
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
  };
  const onInpUsrName = (event) => {
    if (!event.target.value.length) {
      setSignInSignUp({
        ...signInSignUp,
        userName: event.target.value,
      });
    } else {
      setSignInSignUp({
        ...signInSignUp,
        userName: event.target.value,
        isUserFound: true,
      });
    }
  };

  const {
    isSignIn,
    isPassInpHidden,
    isUserNameEmpty,
    userNameRef,
    passwordRef,
    isUserFound,
    loading,
  } = signInSignUp;
  
  const basicFormProps={
    isSignIn,
    isPassInpHidden,
    onInpUsrName,
    userNameRef,
    passwordRef,
    isUserFound
  }

  return (
    // <LoginSignUpContext
    //   isSignIn={isSignIn}
    //   onClickContinue={onClickContinue}
    //   isPassInpHidden={isPassInpHidden}
    //   isUserNameEmpty={isUserNameEmpty}
    //   onInpUsrName={onInpUsrName}
    //   userNameRef={userNameRef}
    //   passwordRef={passwordRef}
    //   isUserFound={isUserFound}
    //   loading={loading}
    // >
    <>
      <LoginSignUp
        toggleSignInSignUp={toggleSignInSignUp}
        signInSignUp={signInSignUp}
      >
        {signInSignUp.isSignIn ? (
          <BasicForm {...basicFormProps}>
            <Login>
              <BasicFormBtn  onClick={onClickContinue}/>
            </Login>
          </BasicForm>
        ) : (
          <BasicForm >
            <SignUp>
            <BasicFormBtn />
            </SignUp>
          </BasicForm>
        )}
      </LoginSignUp>
      </>
  );
};

export default SignInSiginUpScreen;
