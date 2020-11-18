import React, { useState, useEffect, useRef } from "react";
import { checkUserNameExists, registerUser } from "./apis";
import { useInitialState } from "../../shared/helper/useInitialState";
import BasicForm from "../../components/LoginSignUp/BasicForm/BasicFormComponent";
import BasicFormBtn from "../../components/LoginSignUp/BasicForm/BasicFormBtnComponent";
import Login from "../../components/LoginSignUp/Login/LoginComponent";
import LoginSignUp from "../../components/LoginSignUp/LoginSignUpComponent";
import SignUp from "../../components/LoginSignUp/SignUp/SignUpComponent";

const SignInSiginUpScreen = (props) => {
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
    provider:null
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
    console.log(props);
  }, [isSignIn]);

  const getInitialState = useInitialState(signInSignUp);

  const toggleSignInSignUp = () => {
    formRef.current.resetFields();
    if (signInSignUp.isSignIn) {
      setSignInSignUp({
        ...signInSignUp,
        ...getInitialState(),
        isSignIn: false,
        isUserFound: false,
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
      setSignInSignUp({
        ...signInSignUp,
        isUserFound: await checkUserNameExists(event.target.value),
      });
    }
  };

  const onSubmit = async (formData) => {
    if (!isSignIn) {
      delete formData.confirmPassword;
      formData.accountType = "local";
      try {
        registerUser(formData);
      } catch (error) {
        alert("something went wrong");
      }
    } else {
      console.log("...login submit");
    }
  };
  function onSocialLoginSuccess(data){
    registerUser({tokenId:data.tokenId,provider:"google",accountType:"social"});
  };
  const onSocialLoginFailure = (data) => {
    console.log(data);
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
  const loginSignUpProps = {
    toggleSignInSignUp,
    signInSignUp,
    formRef,
    onSubmit,
    onSocialLoginSuccess,
    onSocialLoginFailure,
  };

  return (
    <>
      <LoginSignUp {...loginSignUpProps}>
        <BasicForm {...basicFormProps}>
          {isSignIn ? (
            <Login>
              <BasicFormBtn onClick={onClickSigin} />
            </Login>
          ) : (
            <SignUp {...{ passwordRef }}>
              <BasicFormBtn onClick={onClickSigin} />
            </SignUp>
          )}
        </BasicForm>
      </LoginSignUp>
    </>
  );
};

export default SignInSiginUpScreen;
