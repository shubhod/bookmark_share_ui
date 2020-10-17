import React, { useState, useEffect, useRef } from "react";
import LoginSignUp from "../../components/LoginSignUp/LoginSignUpComponent";
import { checkUserNameExists } from "./apis";
/*ignore jslint start*/

import { useInitialState } from "../../helper/useInitialState";
import Login from "../../components/LoginSignUp/Login/LoginComponent";
import SignUp from "../../components/LoginSignUp/SignUp/SignUpComponent";
import BasicForm from "../../components/LoginSignUp/BasicForm/BasicFormComponent";
import BasicFormBtn from "../../components/LoginSignUp/BasicForm/BasicFormBtnComponent";

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
  const {
    isSignIn,
    isPassInpHidden,
    userNameRef,
    passwordRef,
    isUserFound,
  } = signInSignUp;

  const formRef = useRef();

  useEffect(() => {
    userNameRef.current.focus();
  }, [isSignIn]);

  const getInitialState = useInitialState(signInSignUp);

  const toggleSignInSignUp = () => {
    formRef.current.resetFields();
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
    console.log(isPassInpHidden,isSignIn);
    if (!event.target.value.length) {
      setSignInSignUp({
        ...signInSignUp,
        userName: event.target.value,
      });
    } else {
      setSignInSignUp({
        ...signInSignUp,
        userName: event.target.value,
        isPassInpHidden:true,
        isUserFound: true,
      });
    }
  };

  const basicFormProps = {
    isSignIn,
    isPassInpHidden,
    onInpUsrName,
    userNameRef,
    passwordRef,
    isUserFound,
    formRef,
  };
  const loginFormProps = { toggleSignInSignUp, signInSignUp, formRef };

  return (
    <>
      <LoginSignUp {...loginFormProps}>
        <BasicForm {...basicFormProps}>
          {signInSignUp.isSignIn ? (
            <Login>
              <BasicFormBtn onClick={onClickContinue} />
            </Login>
          ) : (
            <SignUp>
              <BasicFormBtn />
            </SignUp>
          )}
        </BasicForm>
      </LoginSignUp>
    </>
  );
};

export default SignInSiginUpScreen;
