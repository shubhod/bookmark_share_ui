import React from "react";
import { Button } from "antd";
import GoogleLogin from "react-google-login";
const SocialButton = ({ render, provider, onSuccess, onFailure }) => {
  let socialAccount = null;
  const DefaultButton = ({ onClick, disabled }) => {
    return (
      <Button
        className=""
        block
        onClick={onClick}
        disabled={disabled}
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
    );
  };
  let google = (
    <GoogleLogin
      render={(renderProps) =>
        render ? render(renderProps) : <DefaultButton {...renderProps} />
      }
      clientId="251519391405-ifo1kh31rptq6tsq4gd462qku1juer9d.apps.googleusercontent.com"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );

  switch (provider) {
    case "google":
      socialAccount = google;
      break;
    default:
      break;
  }
  return socialAccount;
};
const PocApp = () => {
  return (
    <SocialButton
      provider="google"
      className="google"
      onSuccess={() => {
        console.log("object");
      }}
    />
  );
};

export default PocApp;

