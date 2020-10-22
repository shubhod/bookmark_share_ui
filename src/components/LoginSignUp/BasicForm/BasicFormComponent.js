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
  const MSG_USER_ALREADY_EXISTS = "user already exists";
  const MSG_PASS_REQUIRED = "Please input your Password";
  const MSG_STRONG_PASS_FAILURE ="A strong password is at least 8 characters long and includes uppercase and lowercase letters, numbers, and symbols.";
  const MSG_INVALID_EMAIL="not a valid email";
 
  const STRONG_PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const EMAIL_REGEX= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let inputTimer = null;  
  return (
    <>
      <Form.Item
        name="userName"
        help={
          !isSignIn
            ? isUserFound
              ? MSG_USER_ALREADY_EXISTS
              : null
            : isUserFound
            ? null
            : MSG_USER_NOT_FOUND
        }
        rules={[
          {
            required: true,
            message: MSG_USER_NAME_REQUIRED,
          },
          () => ({
            validator(rule,value) {
              if (isSignIn || (!value || EMAIL_REGEX.test(value))) {
                return Promise.resolve();
              } else return Promise.reject(MSG_INVALID_EMAIL);
            },
          }),
        ]
      
      
      }

      >
        <Input
          className="form-input"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={isSignIn?"userName":"Email"}
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
              if (isSignIn || (!value || STRONG_PASS_REGEX.test(value))) {
                return Promise.resolve();
              } else return Promise.reject(MSG_STRONG_PASS_FAILURE);
            },
          }),
        ]}
      >
        <Input
          className="form-input"
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
