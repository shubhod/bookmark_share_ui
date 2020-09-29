import React from "react";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import FormFooter from "./BasicFormFooterComponent";

const BasicForm = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      style={{ width: "100%",textAlign:"center" }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button block htmlType="submit" className="btn-login">
          Log in
        </Button>
      </Form.Item>
      {props.children}
      <FormFooter footerExplanation="Don't have an account?" footerLink="Create account" />
    </Form>
  );
};

export default BasicForm;
