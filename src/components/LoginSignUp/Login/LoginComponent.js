import React from "react";
import BasicForm from "../../BasicForm/BasicFormComponent";
import { Form,Checkbox } from "antd";
import "./LoginStyles.scss"
const Login = () => {
  return (
    <BasicForm>
      <div className="login-remember" >
      <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>         
      </div>
    </BasicForm>
  );
};

export default Login;
