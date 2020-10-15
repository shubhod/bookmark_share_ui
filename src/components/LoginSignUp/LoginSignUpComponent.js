import React, { useState } from "react";
import { Button } from "antd";
import SignUp from "./SignUp/SignUpComponent";
import Login from "./Login/LoginComponent";
import "./LoginSignUpStyles.scss";
// import { useSigInSignUpContext } from "../../screens/SignInSignUp/SignInSignUpContext";

const LoginSignUp = ({ toggleSignInSignUp, signInSignUp }) => {
  const [animation, setAnimation] = useState(null);
  const { explanation, link } = signInSignUp.formFooter;
  return (
    <div className="login">
      <div className="login_tag-line">
        <div style={{ width: "45vw", paddingLeft: "0vw" }}>
          start the new way <br /> of learning <br />
          from today
        </div>
      </div>

      <div className="login__input-area">
        <div className="login__input-area__header">
          <img
            className="login__input-area__logo"
            src="/images/mainScreen/logo.png"
            alt=""
          />
          <div className="login__input-area__header__tagline">
            <p>Flash Notes</p>
            <p>
              <strong>prepare your content in no time</strong>
            </p>
          </div>
          <Button
            block
            className="login__input-area__btn-google"
            icon={
              <img
                alt=""
                style={{ height: "30px" }}
                src="/images/loginScreen/googleIcon.png"
              />
            }
          >
            Continue with google
          </Button>
        </div>
        <div className={`login__input-area__content  ${animation}`}> 
          {(signInSignUp.isSignIn)?<Login />:<SignUp/>}
          <div className="form-footer">
            <div className="form-footer__explanation">{explanation}</div>
            <div
              className="form-footer__link"
              onClick={() => {
                toggleSignInSignUp();
                setAnimation("animate__fadeIn animate__slower");
                setTimeout(() => {
                  setAnimation(null);
                  console.log("time out activated ");
                },1000);
              }}
            >
              {link}
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default LoginSignUp;
