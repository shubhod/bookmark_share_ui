import React from "react";
import { useContextFactory } from "../../helper/useContextFactory";
const signInSignUpContext = React.createContext();
export const useSigInSignUpContext = useContextFactory(
  "loginSignUpContext",
  signInSignUpContext
);
const LoginSignUpContext = (props) => {
  return (
    <signInSignUpContext.Provider  value={props}>
      {props.children}
    </signInSignUpContext.Provider>
  );
};

export default LoginSignUpContext;
