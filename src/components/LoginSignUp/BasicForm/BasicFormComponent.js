import React from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const BasicForm = ({
  isSignIn,
  isPassInpHidden,
  onInpUsrName,
  userNameRef,
  passwordRef,
  isUserFound,
  children,
}) => {
  const MSG_USER_NOT_FOUND = "user not found";
  const MSG_USER_NAME_REQUIRED = "Please input your Username!";
  const MSG_USER_ALREADY_EXISTS="user already exists";
  const MSG_PASS_REQUIRED = "Please input your Password";
  const MSG_STRONG_PASS_SUCCESS = "strong password";
  const MSG_STRONG_PASS_FAILURE = "please enter a strong password";

  const STRONG_PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

  let inputTimer = null;
  console.log(isUserFound);
  return (
    <>
      <Form.Item
        name="username"
        help={!isSignIn ?(isUserFound ? MSG_USER_ALREADY_EXISTS:null ):(isUserFound ? null : MSG_USER_NOT_FOUND)}
        rules={[
          {
            required: true,
            message: MSG_USER_NAME_REQUIRED,
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          ref={userNameRef}
          onInput={(event) => {
            let lastEvent = { ...event };
            clearTimeout(inputTimer);
            inputTimer = setTimeout(() => {
              onInpUsrName(lastEvent);
            }, 300);
          }}
        />
      </Form.Item>
      <Form.Item
        hidden={isSignIn && isPassInpHidden}
        hasFeedback={!isSignIn}
        name="password"
        rules={[
          {
            required: true,
            message: MSG_PASS_REQUIRED,
          },
          () => ({
            validator(rule, value) {
              if (!value || STRONG_PASS_REGEX.test(value)) {
                return Promise.resolve(MSG_STRONG_PASS_SUCCESS);
              } else return Promise.reject(MSG_STRONG_PASS_FAILURE);
            },
          }),
        ]}
      >
        <Input
          ref={passwordRef}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {children}
      {/* </Form> */}
    </>
  );
};

export default BasicForm;
