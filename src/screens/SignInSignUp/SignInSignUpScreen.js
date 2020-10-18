import React, { useState, useEffect, useRef } from "react";
import { checkUserNameExists } from "./apis";

import { useInitialState } from "../../helper/useInitialState";

import BasicForm from "../../components/LoginSignUp/BasicForm/BasicFormComponent";
import BasicFormBtn from "../../components/LoginSignUp/BasicForm/BasicFormBtnComponent";
import Login from "../../components/LoginSignUp/Login/LoginComponent";
import LoginSignUp from "../../components/LoginSignUp/LoginSignUpComponent";
import SignUp from "../../components/LoginSignUp/SignUp/SignUpComponent";

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
    userName,
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
        isUserFound:false,
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

  const onClickSigin = async () => {
    if (userName) {
      setSignInSignUp({ ...signInSignUp, loading: true });
      if (await checkUserNameExists(userName)) {
        setSignInSignUp({
          ...signInSignUp,
          loading: false,
          isPassInpHidden: false,
        });
        setTimeout(() => {
          passwordRef.current.focus();
        }, 100);
      } else {
        setSignInSignUp({ ...signInSignUp, isUserFound: false });
      }
    }
  };

  const onInpUsrName = async (event) => {
    if (isSignIn) {
      setSignInSignUp({
        ...signInSignUp,
        userName: event.target.value,
        isPassInpHidden: true,
        isUserFound: true,
      });
    } else {
      console.log(await checkUserNameExists(userName));
      setSignInSignUp({
        ...signInSignUp,
        isUserFound: await checkUserNameExists(event.target.value),
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
          {isSignIn ? (
            <Login>
              <BasicFormBtn onClick={onClickSigin} />
            </Login>
          ) : (
            <SignUp {...{ passwordRef }}>
              <BasicFormBtn />
            </SignUp>
          )}
        </BasicForm>
      </LoginSignUp>
    </>
  );
};

export default SignInSiginUpScreen;
