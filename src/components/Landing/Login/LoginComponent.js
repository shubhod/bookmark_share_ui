import React from "react";
import BasicForm from "../../BasicForm/BasicFormComponent";
import { Form } from "antd";
const Login = () => {
  return (
    <BasicForm>
      <div className="user-agreement">
        {/* By creating an account, you are agreeing to 
        our Terms of Service and */}
        Privacy Policy.
      </div>
    </BasicForm>
  );
};

export default Login;
