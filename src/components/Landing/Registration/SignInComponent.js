import React from "react";
import BasicForm from "../../BasicForm/BasicFormComponent";
import { Form, Checkbox } from "antd";

const SignIn = () => {
  return (
    <BasicForm>
        <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
        </a>
      </Form.Item>
    </BasicForm>
  );
};

export default SignIn;
