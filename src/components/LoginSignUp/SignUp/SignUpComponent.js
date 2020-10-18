import React from "react";
import "./SignUpnStyles.scss";

import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const SignUp = ({ children, passwordRef}) => {
  
  const MSG_PASS_REQUIRED = "confirm password required ";
  const MSG_PASS_NOT_MATCH="The two passwords that you entered do not match!";
  
  return (
    <>
      <Form.Item
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: MSG_PASS_REQUIRED
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(MSG_PASS_NOT_MATCH);
            },
            validateTrigger:'onClick'
          }
          )
        ]}
      >
        <Input
          ref={passwordRef}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm  password"
        />
      </Form.Item>
      {children}
      <div className="form-agreement">
        By creating an account, you are agreeing to our Terms of Service and
        Privacy Policy.
      </div>
    </>
  );
};

export default SignUp;
