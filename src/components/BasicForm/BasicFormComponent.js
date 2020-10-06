import React from "react";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSigInSignUpContext } from "../../screens/SignInSignUp/SignInSignUpContext";

const BasicForm = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  let inputTimer = null;
  const {
    isSignIn,
    isPassInpHidden,
    onInpUsrName,
    userNameRef,
    passwordRef
  } = useSigInSignUpContext();

  return (
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      style={{ width: "100%", textAlign: "center" }}
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
          ref={userNameRef}
          onInput={(event)=>{
            let lastEvent={...event};
            clearTimeout(inputTimer);
            inputTimer=setTimeout(()=>{onInpUsrName(lastEvent)},300);
          }}
        />
      </Form.Item>
      <Form.Item
        hidden={isSignIn && isPassInpHidden}
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          ref={passwordRef}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {props.children}
    </Form>
  );
};

export default BasicForm;
