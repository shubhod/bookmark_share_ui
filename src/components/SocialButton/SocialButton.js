import React from "react";
import { Button } from "antd";
import GoogleLogin from "react-google-login";
import { GOOGLE_CLIENT_ID } from '../../shared/helper/constants';
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
      clientId={GOOGLE_CLIENT_ID}
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
export default SocialButton;