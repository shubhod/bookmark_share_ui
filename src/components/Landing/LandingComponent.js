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
        <div style={{width:"45vw",paddingLeft:"0vw"}}>start the  new way  <br /> of learning  <br/>from today</div>
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
          <Button block className="login__input-area__btn-google" icon={<img style={{height:"30px"}}src="/images/loginScreen/googleIcon.png"></img>}>Continue with google</Button>
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
