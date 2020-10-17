import React from "react";
import "./SignUpnStyles.scss";

import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const SignUp = ({ children, passwordRef}) => {
  const MSG_PASSWORD_REQUIRED = "confirm password required ";
  return (
    <>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: MSG_PASSWORD_REQUIRED
          },
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
