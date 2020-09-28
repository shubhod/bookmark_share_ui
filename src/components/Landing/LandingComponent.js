import React from "react";
import "./LandingStyles.scss";
import { Button} from "antd";
import SignIn from "./Registration/SignInComponent";
import FormFooter from "../BasicForm/BasicFormFooterComponent";
import Login from "./Login/LoginComponent";

const Landing = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login">
      <div className="login_tag-line">
        change the way you think <br /> with flash notes
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
          <Button block className="login__input-area__btn-google">hello</Button>
        </div>
        <div className="login__input-area__content">
        <Login/>
        </div>
        <div>

        

        </div>
      </div>

    </div>
  );
};

export default Landing;
