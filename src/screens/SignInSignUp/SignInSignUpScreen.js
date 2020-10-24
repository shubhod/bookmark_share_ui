import React, { useState, useEffect, useRef } from "react";
import { checkUserNameExists, registerUser } from "./apis";
import { useInitialState } from "../../shared/helper/useInitialState";
import BasicForm from "../../components/LoginSignUp/BasicForm/BasicFormComponent";
import BasicFormBtn from "../../components/LoginSignUp/BasicForm/BasicFormBtnComponent";
import Login from "../../components/LoginSignUp/Login/LoginComponent";
import LoginSignUp from "../../components/LoginSignUp/LoginSignUpComponent";
import SignUp from "../../components/LoginSignUp/SignUp/SignUpComponent";
import { storeAuthToken } from "./methods/storeAuthToken";

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
    // if (userName) {
    //   setSignInSignUp({ ...signInSignUp, loading: true });
    //   if (await checkUserNameExists(userName)){
    //     setSignInSignUp({
    //       ...signInSignUp,
    //       isPassInpHidden: false,
    //     });
    //     setTimeout(() => {
    //       passwordRef.current.focus();
    //     }, 100);
    //   } else {
    //     setSignInSignUp({ ...signInSignUp, isUserFound: false });
    //   }
    //
    // const finalValues = {
    //   userName: "deep.221@gmail.com",
    //   password: "asdasd$5DEp21",
    // };
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

  const onSubmit = async (values) => {
    if (!isSignIn) {
      const { confirmPassword, ...finalValues } = values;
      try {
        let userRegistrationReponse = await registerUser(finalValues);
        storeAuthToken(userRegistrationReponse.data.token);
      } catch (error) {
        alert("something went wrong");
      }
    } else {
      console.log("...login submit");
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
  const loginSignUpProps = {
    toggleSignInSignUp,
    signInSignUp,
    formRef,
    onSubmit,
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
