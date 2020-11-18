import React, { useState } from "react";
import "./LoginSignUpStyles.scss";
import Form from "antd/lib/form/Form";
import SocialButton from '../SocialButton/SocialButton';

const LoginSignUp = ({
  toggleSignInSignUp,
  signInSignUp,
  formRef,
  children,
  onSubmit,
  onSocialLoginSuccess,
  onSocialLoginFailure
}) => {
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
          <SocialButton
            provider="google"
            className="google"
            onSuccess={onSocialLoginSuccess.bind({provider:"google"})}
            onSocialLoginFailure={onSocialLoginFailure}
          />
        </div>
        <div className={`login__input-area__content  ${animation}`}>
          <Form
            ref={formRef}
            className="sigInSignUp"
            name="normal_login"
            initialValues={{
              remember: false,
            }}
            style={{ width: "100%", textAlign: "center" }}
            onFinish={onSubmit}
          >
            {children}
          </Form>

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
                }, 1000);
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
