import React from "react";
import BasicForm from "../../BasicForm/BasicFormComponent";
import "./SignUpnStyles.scss";
const SignUp = () => {
  return (
    <BasicForm>
      <div   className="form-agreement"> By creating an account, you are agreeing to our Terms of Service and Privacy Policy.
</div>
    </BasicForm>
  );
};

export default SignUp;
