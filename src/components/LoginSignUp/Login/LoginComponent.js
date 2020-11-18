import React from "react";
import { Form,Checkbox } from "antd";
import "./LoginStyles.scss"

const Login = ({children}) => {
  return (
    <>
      {children}
      <div className="login-remember" >
      <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </div>
      </>

  );
};

export default Login;
